# `gkeonpremVmwareAdminCluster` Submodule <a name="`gkeonpremVmwareAdminCluster` Submodule" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareAdminCluster <a name="GkeonpremVmwareAdminCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminCluster(scope Construct, id *string, config GkeonpremVmwareAdminClusterConfig) GkeonpremVmwareAdminCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig">GkeonpremVmwareAdminClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig">GkeonpremVmwareAdminClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode">PutAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups">PutAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig">PutAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode">PutControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig">PutPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig">PutPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter">PutVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAddonNode">ResetAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAntiAffinityGroups">ResetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAutoRepairConfig">ResetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetBootstrapClusterMembership">ResetBootstrapClusterMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetControlPlaneNode">ResetControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOnPremVersion">ResetOnPremVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPlatformConfig">ResetPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPrivateRegistryConfig">ResetPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetVcenter">ResetVcenter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddonNode` <a name="PutAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode"></a>

```go
func PutAddonNode(value GkeonpremVmwareAdminClusterAddonNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAddonNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---

##### `PutAntiAffinityGroups` <a name="PutAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups"></a>

```go
func PutAntiAffinityGroups(value GkeonpremVmwareAdminClusterAntiAffinityGroups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization"></a>

```go
func PutAuthorization(value GkeonpremVmwareAdminClusterAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---

##### `PutAutoRepairConfig` <a name="PutAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig"></a>

```go
func PutAutoRepairConfig(value GkeonpremVmwareAdminClusterAutoRepairConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `PutControlPlaneNode` <a name="PutControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode"></a>

```go
func PutControlPlaneNode(value GkeonpremVmwareAdminClusterControlPlaneNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer"></a>

```go
func PutLoadBalancer(value GkeonpremVmwareAdminClusterLoadBalancer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GkeonpremVmwareAdminClusterNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `PutPlatformConfig` <a name="PutPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig"></a>

```go
func PutPlatformConfig(value GkeonpremVmwareAdminClusterPlatformConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `PutPrivateRegistryConfig` <a name="PutPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig"></a>

```go
func PutPrivateRegistryConfig(value GkeonpremVmwareAdminClusterPrivateRegistryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putPrivateRegistryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts"></a>

```go
func PutTimeouts(value GkeonpremVmwareAdminClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

---

##### `PutVcenter` <a name="PutVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter"></a>

```go
func PutVcenter(value GkeonpremVmwareAdminClusterVcenter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---

##### `ResetAddonNode` <a name="ResetAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAddonNode"></a>

```go
func ResetAddonNode()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAntiAffinityGroups` <a name="ResetAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAntiAffinityGroups"></a>

```go
func ResetAntiAffinityGroups()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetAutoRepairConfig` <a name="ResetAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetAutoRepairConfig"></a>

```go
func ResetAutoRepairConfig()
```

##### `ResetBootstrapClusterMembership` <a name="ResetBootstrapClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetBootstrapClusterMembership"></a>

```go
func ResetBootstrapClusterMembership()
```

##### `ResetControlPlaneNode` <a name="ResetControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetControlPlaneNode"></a>

```go
func ResetControlPlaneNode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetImageType"></a>

```go
func ResetImageType()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetOnPremVersion` <a name="ResetOnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetOnPremVersion"></a>

```go
func ResetOnPremVersion()
```

##### `ResetPlatformConfig` <a name="ResetPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPlatformConfig"></a>

```go
func ResetPlatformConfig()
```

##### `ResetPrivateRegistryConfig` <a name="ResetPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetPrivateRegistryConfig"></a>

```go
func ResetPrivateRegistryConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVcenter` <a name="ResetVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.resetVcenter"></a>

```go
func ResetVcenter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.GkeonpremVmwareAdminCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.GkeonpremVmwareAdminCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.GkeonpremVmwareAdminCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.GkeonpremVmwareAdminCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeonpremVmwareAdminCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeonpremVmwareAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNode">AddonNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference">GkeonpremVmwareAdminClusterAddonNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference">GkeonpremVmwareAdminClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedCluster">EnableAdvancedCluster</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList">GkeonpremVmwareAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference">GkeonpremVmwareAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.localName">LocalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfig">PlatformConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference">GkeonpremVmwareAdminClusterPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfig">PrivateRegistryConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference">GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList">GkeonpremVmwareAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference">GkeonpremVmwareAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference">GkeonpremVmwareAdminClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNodeInput">AddonNodeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput">AntiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfigInput">AutoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput">BootstrapClusterMembershipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNodeInput">ControlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageTypeInput">ImageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersionInput">OnPremVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfigInput">PlatformConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfigInput">PrivateRegistryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenterInput">VcenterInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembership">BootstrapClusterMembership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersion">OnPremVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddonNode`<sup>Required</sup> <a name="AddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNode"></a>

```go
func AddonNode() GkeonpremVmwareAdminClusterAddonNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference">GkeonpremVmwareAdminClusterAddonNodeOutputReference</a>

---

##### `AntiAffinityGroups`<sup>Required</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroups"></a>

```go
func AntiAffinityGroups() GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a>

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorization"></a>

```go
func Authorization() GkeonpremVmwareAdminClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference">GkeonpremVmwareAdminClusterAuthorizationOutputReference</a>

---

##### `AutoRepairConfig`<sup>Required</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfig"></a>

```go
func AutoRepairConfig() GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a>

---

##### `ControlPlaneNode`<sup>Required</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNode"></a>

```go
func ControlPlaneNode() GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnableAdvancedCluster`<sup>Required</sup> <a name="EnableAdvancedCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.enableAdvancedCluster"></a>

```go
func EnableAdvancedCluster() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.fleet"></a>

```go
func Fleet() GkeonpremVmwareAdminClusterFleetList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList">GkeonpremVmwareAdminClusterFleetList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancer"></a>

```go
func LoadBalancer() GkeonpremVmwareAdminClusterLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference">GkeonpremVmwareAdminClusterLoadBalancerOutputReference</a>

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.localName"></a>

```go
func LocalName() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfig"></a>

```go
func NetworkConfig() GkeonpremVmwareAdminClusterNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigOutputReference</a>

---

##### `PlatformConfig`<sup>Required</sup> <a name="PlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfig"></a>

```go
func PlatformConfig() GkeonpremVmwareAdminClusterPlatformConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference">GkeonpremVmwareAdminClusterPlatformConfigOutputReference</a>

---

##### `PrivateRegistryConfig`<sup>Required</sup> <a name="PrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfig"></a>

```go
func PrivateRegistryConfig() GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference">GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.status"></a>

```go
func Status() GkeonpremVmwareAdminClusterStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList">GkeonpremVmwareAdminClusterStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeouts"></a>

```go
func Timeouts() GkeonpremVmwareAdminClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference">GkeonpremVmwareAdminClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenter"></a>

```go
func Vcenter() GkeonpremVmwareAdminClusterVcenterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference">GkeonpremVmwareAdminClusterVcenterOutputReference</a>

---

##### `AddonNodeInput`<sup>Optional</sup> <a name="AddonNodeInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.addonNodeInput"></a>

```go
func AddonNodeInput() GkeonpremVmwareAdminClusterAddonNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AntiAffinityGroupsInput`<sup>Optional</sup> <a name="AntiAffinityGroupsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput"></a>

```go
func AntiAffinityGroupsInput() GkeonpremVmwareAdminClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.authorizationInput"></a>

```go
func AuthorizationInput() GkeonpremVmwareAdminClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---

##### `AutoRepairConfigInput`<sup>Optional</sup> <a name="AutoRepairConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.autoRepairConfigInput"></a>

```go
func AutoRepairConfigInput() GkeonpremVmwareAdminClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `BootstrapClusterMembershipInput`<sup>Optional</sup> <a name="BootstrapClusterMembershipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput"></a>

```go
func BootstrapClusterMembershipInput() *string
```

- *Type:* *string

---

##### `ControlPlaneNodeInput`<sup>Optional</sup> <a name="ControlPlaneNodeInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.controlPlaneNodeInput"></a>

```go
func ControlPlaneNodeInput() GkeonpremVmwareAdminClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageTypeInput"></a>

```go
func ImageTypeInput() *string
```

- *Type:* *string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() GkeonpremVmwareAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GkeonpremVmwareAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `OnPremVersionInput`<sup>Optional</sup> <a name="OnPremVersionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersionInput"></a>

```go
func OnPremVersionInput() *string
```

- *Type:* *string

---

##### `PlatformConfigInput`<sup>Optional</sup> <a name="PlatformConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.platformConfigInput"></a>

```go
func PlatformConfigInput() GkeonpremVmwareAdminClusterPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `PrivateRegistryConfigInput`<sup>Optional</sup> <a name="PrivateRegistryConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.privateRegistryConfigInput"></a>

```go
func PrivateRegistryConfigInput() GkeonpremVmwareAdminClusterPrivateRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcenterInput`<sup>Optional</sup> <a name="VcenterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.vcenterInput"></a>

```go
func VcenterInput() GkeonpremVmwareAdminClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BootstrapClusterMembership`<sup>Required</sup> <a name="BootstrapClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.bootstrapClusterMembership"></a>

```go
func BootstrapClusterMembership() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.onPremVersion"></a>

```go
func OnPremVersion() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareAdminClusterAddonNode <a name="GkeonpremVmwareAdminClusterAddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterAddonNode {
	AutoResizeConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | auto_resize_config block. |

---

##### `AutoResizeConfig`<sup>Optional</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig"></a>

```go
AutoResizeConfig GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#auto_resize_config GkeonpremVmwareAdminCluster#auto_resize_config}

---

### GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig <a name="GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable controle plane node auto resizing. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable controle plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterAntiAffinityGroups <a name="GkeonpremVmwareAdminClusterAntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterAntiAffinityGroups {
	AagConfigDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>interface{}</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```go
AagConfigDisabled interface{}
```

- *Type:* interface{}

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#aag_config_disabled GkeonpremVmwareAdminCluster#aag_config_disabled}

---

### GkeonpremVmwareAdminClusterAuthorization <a name="GkeonpremVmwareAdminClusterAuthorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterAuthorization {
	ViewerUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.property.viewerUsers">ViewerUsers</a></code> | <code>interface{}</code> | viewer_users block. |

---

##### `ViewerUsers`<sup>Optional</sup> <a name="ViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization.property.viewerUsers"></a>

```go
ViewerUsers interface{}
```

- *Type:* interface{}

viewer_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#viewer_users GkeonpremVmwareAdminCluster#viewer_users}

---

### GkeonpremVmwareAdminClusterAuthorizationViewerUsers <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers {
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username">Username</a></code> | <code>*string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#username GkeonpremVmwareAdminCluster#username}

---

### GkeonpremVmwareAdminClusterAutoRepairConfig <a name="GkeonpremVmwareAdminClusterAutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterAutoRepairConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether auto repair is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterConfig <a name="GkeonpremVmwareAdminClusterConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NetworkConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig,
	AddonNode: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode,
	Annotations: *map[string]*string,
	AntiAffinityGroups: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups,
	Authorization: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization,
	AutoRepairConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig,
	BootstrapClusterMembership: *string,
	ControlPlaneNode: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode,
	Description: *string,
	Id: *string,
	ImageType: *string,
	LoadBalancer: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer,
	OnPremVersion: *string,
	PlatformConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig,
	PrivateRegistryConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts,
	Vcenter: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.name">Name</a></code> | <code>*string</code> | The VMware admin cluster resource name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.addonNode">AddonNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | addon_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations on the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership">BootstrapClusterMembership</a></code> | <code>*string</code> | The bootstrap cluster this VMware admin cluster belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.description">Description</a></code> | <code>*string</code> | A human readable description of this VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.imageType">ImageType</a></code> | <code>*string</code> | The OS image type for the VMware admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.onPremVersion">OnPremVersion</a></code> | <code>*string</code> | The Anthos clusters on the VMware version for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.platformConfig">PlatformConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | platform_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.privateRegistryConfig">PrivateRegistryConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | private_registry_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | vcenter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#location GkeonpremVmwareAdminCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The VMware admin cluster resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#name GkeonpremVmwareAdminCluster#name}

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.networkConfig"></a>

```go
NetworkConfig GkeonpremVmwareAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#network_config GkeonpremVmwareAdminCluster#network_config}

---

##### `AddonNode`<sup>Optional</sup> <a name="AddonNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.addonNode"></a>

```go
AddonNode GkeonpremVmwareAdminClusterAddonNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

addon_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#addon_node GkeonpremVmwareAdminCluster#addon_node}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations on the VMware Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#annotations GkeonpremVmwareAdminCluster#annotations}

---

##### `AntiAffinityGroups`<sup>Optional</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups"></a>

```go
AntiAffinityGroups GkeonpremVmwareAdminClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#anti_affinity_groups GkeonpremVmwareAdminCluster#anti_affinity_groups}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.authorization"></a>

```go
Authorization GkeonpremVmwareAdminClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#authorization GkeonpremVmwareAdminCluster#authorization}

---

##### `AutoRepairConfig`<sup>Optional</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.autoRepairConfig"></a>

```go
AutoRepairConfig GkeonpremVmwareAdminClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#auto_repair_config GkeonpremVmwareAdminCluster#auto_repair_config}

---

##### `BootstrapClusterMembership`<sup>Optional</sup> <a name="BootstrapClusterMembership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership"></a>

```go
BootstrapClusterMembership *string
```

- *Type:* *string

The bootstrap cluster this VMware admin cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GkeonpremVmwareAdminCluster#bootstrap_cluster_membership}

---

##### `ControlPlaneNode`<sup>Optional</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.controlPlaneNode"></a>

```go
ControlPlaneNode GkeonpremVmwareAdminClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node GkeonpremVmwareAdminCluster#control_plane_node}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human readable description of this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#description GkeonpremVmwareAdminCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#id GkeonpremVmwareAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.imageType"></a>

```go
ImageType *string
```

- *Type:* *string

The OS image type for the VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#image_type GkeonpremVmwareAdminCluster#image_type}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.loadBalancer"></a>

```go
LoadBalancer GkeonpremVmwareAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#load_balancer GkeonpremVmwareAdminCluster#load_balancer}

---

##### `OnPremVersion`<sup>Optional</sup> <a name="OnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.onPremVersion"></a>

```go
OnPremVersion *string
```

- *Type:* *string

The Anthos clusters on the VMware version for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#on_prem_version GkeonpremVmwareAdminCluster#on_prem_version}

---

##### `PlatformConfig`<sup>Optional</sup> <a name="PlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.platformConfig"></a>

```go
PlatformConfig GkeonpremVmwareAdminClusterPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#platform_config GkeonpremVmwareAdminCluster#platform_config}

---

##### `PrivateRegistryConfig`<sup>Optional</sup> <a name="PrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.privateRegistryConfig"></a>

```go
PrivateRegistryConfig GkeonpremVmwareAdminClusterPrivateRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

private_registry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#private_registry_config GkeonpremVmwareAdminCluster#private_registry_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#project GkeonpremVmwareAdminCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.timeouts"></a>

```go
Timeouts GkeonpremVmwareAdminClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts">GkeonpremVmwareAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#timeouts GkeonpremVmwareAdminCluster#timeouts}

---

##### `Vcenter`<sup>Optional</sup> <a name="Vcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterConfig.property.vcenter"></a>

```go
Vcenter GkeonpremVmwareAdminClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#vcenter GkeonpremVmwareAdminCluster#vcenter}

---

### GkeonpremVmwareAdminClusterControlPlaneNode <a name="GkeonpremVmwareAdminClusterControlPlaneNode" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterControlPlaneNode {
	Cpus: *f64,
	Memory: *f64,
	Replicas: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.cpus">Cpus</a></code> | <code>*f64</code> | The number of vCPUs for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.memory">Memory</a></code> | <code>*f64</code> | The number of mebibytes of memory for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.replicas">Replicas</a></code> | <code>*f64</code> | The number of control plane nodes for this VMware admin cluster. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.cpus"></a>

```go
Cpus *f64
```

- *Type:* *f64

The number of vCPUs for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#cpus GkeonpremVmwareAdminCluster#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

The number of mebibytes of memory for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#memory GkeonpremVmwareAdminCluster#memory}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

The number of control plane nodes for this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#replicas GkeonpremVmwareAdminCluster#replicas}

---

### GkeonpremVmwareAdminClusterFleet <a name="GkeonpremVmwareAdminClusterFleet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterFleet {

}
```


### GkeonpremVmwareAdminClusterLoadBalancer <a name="GkeonpremVmwareAdminClusterLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterLoadBalancer {
	VipConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig,
	F5Config: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config,
	ManualLbConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig,
	MetalLbConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig"></a>

```go
VipConfig GkeonpremVmwareAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#vip_config GkeonpremVmwareAdminCluster#vip_config}

---

##### `F5Config`<sup>Optional</sup> <a name="F5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.f5Config"></a>

```go
F5Config GkeonpremVmwareAdminClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#f5_config GkeonpremVmwareAdminCluster#f5_config}

---

##### `ManualLbConfig`<sup>Optional</sup> <a name="ManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig"></a>

```go
ManualLbConfig GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#manual_lb_config GkeonpremVmwareAdminCluster#manual_lb_config}

---

##### `MetalLbConfig`<sup>Optional</sup> <a name="MetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig"></a>

```go
MetalLbConfig GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#metal_lb_config GkeonpremVmwareAdminCluster#metal_lb_config}

---

### GkeonpremVmwareAdminClusterLoadBalancerF5Config <a name="GkeonpremVmwareAdminClusterLoadBalancerF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config {
	Address: *string,
	Partition: *string,
	SnatPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address">Address</a></code> | <code>*string</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition">Partition</a></code> | <code>*string</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool">SnatPool</a></code> | <code>*string</code> | The pool name. Only necessary, if using SNAT. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address"></a>

```go
Address *string
```

- *Type:* *string

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#partition GkeonpremVmwareAdminCluster#partition}

---

##### `SnatPool`<sup>Optional</sup> <a name="SnatPool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool"></a>

```go
SnatPool *string
```

- *Type:* *string

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#snat_pool GkeonpremVmwareAdminCluster#snat_pool}

---

### GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig {
	AddonsNodePort: *f64,
	ControlPlaneNodePort: *f64,
	IngressHttpNodePort: *f64,
	IngressHttpsNodePort: *f64,
	KonnectivityServerNodePort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort">AddonsNodePort</a></code> | <code>*f64</code> | NodePort for add-ons server in the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>*f64</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>*f64</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>*f64</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>*f64</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `AddonsNodePort`<sup>Optional</sup> <a name="AddonsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort"></a>

```go
AddonsNodePort *f64
```

- *Type:* *f64

NodePort for add-ons server in the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#addons_node_port GkeonpremVmwareAdminCluster#addons_node_port}

---

##### `ControlPlaneNodePort`<sup>Optional</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```go
ControlPlaneNodePort *f64
```

- *Type:* *f64

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_node_port GkeonpremVmwareAdminCluster#control_plane_node_port}

---

##### `IngressHttpNodePort`<sup>Optional</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```go
IngressHttpNodePort *f64
```

- *Type:* *f64

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ingress_http_node_port GkeonpremVmwareAdminCluster#ingress_http_node_port}

---

##### `IngressHttpsNodePort`<sup>Optional</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```go
IngressHttpsNodePort *f64
```

- *Type:* *f64

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ingress_https_node_port GkeonpremVmwareAdminCluster#ingress_https_node_port}

---

##### `KonnectivityServerNodePort`<sup>Optional</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```go
KonnectivityServerNodePort *f64
```

- *Type:* *f64

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GkeonpremVmwareAdminCluster#konnectivity_server_node_port}

---

### GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Metal LB is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Metal LB is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterLoadBalancerVipConfig <a name="GkeonpremVmwareAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig {
	ControlPlaneVip: *string,
	AddonsVip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>*string</code> | The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip">AddonsVip</a></code> | <code>*string</code> | The VIP to configure the load balancer for add-ons. |

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```go
ControlPlaneVip *string
```

- *Type:* *string

The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_vip GkeonpremVmwareAdminCluster#control_plane_vip}

---

##### `AddonsVip`<sup>Optional</sup> <a name="AddonsVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip"></a>

```go
AddonsVip *string
```

- *Type:* *string

The VIP to configure the load balancer for add-ons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#addons_vip GkeonpremVmwareAdminCluster#addons_vip}

---

### GkeonpremVmwareAdminClusterNetworkConfig <a name="GkeonpremVmwareAdminClusterNetworkConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfig {
	PodAddressCidrBlocks: *[]*string,
	ServiceAddressCidrBlocks: *[]*string,
	DhcpIpConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig,
	HaControlPlaneConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig,
	HostConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig,
	StaticIpConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig,
	VcenterNetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig">HaControlPlaneConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | ha_control_plane_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork">VcenterNetwork</a></code> | <code>*string</code> | vcenter_network specifies vCenter network name. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```go
PodAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GkeonpremVmwareAdminCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```go
ServiceAddressCidrBlocks *[]*string
```

- *Type:* *[]*string

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GkeonpremVmwareAdminCluster#service_address_cidr_blocks}

---

##### `DhcpIpConfig`<sup>Optional</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig"></a>

```go
DhcpIpConfig GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#dhcp_ip_config GkeonpremVmwareAdminCluster#dhcp_ip_config}

---

##### `HaControlPlaneConfig`<sup>Optional</sup> <a name="HaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig"></a>

```go
HaControlPlaneConfig GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

ha_control_plane_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ha_control_plane_config GkeonpremVmwareAdminCluster#ha_control_plane_config}

---

##### `HostConfig`<sup>Optional</sup> <a name="HostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig"></a>

```go
HostConfig GkeonpremVmwareAdminClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#host_config GkeonpremVmwareAdminCluster#host_config}

---

##### `StaticIpConfig`<sup>Optional</sup> <a name="StaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig"></a>

```go
StaticIpConfig GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#static_ip_config GkeonpremVmwareAdminCluster#static_ip_config}

---

##### `VcenterNetwork`<sup>Optional</sup> <a name="VcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork"></a>

```go
VcenterNetwork *string
```

- *Type:* *string

vcenter_network specifies vCenter network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#vcenter_network GkeonpremVmwareAdminCluster#vcenter_network}

---

### GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#enabled GkeonpremVmwareAdminCluster#enabled}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig {
	ControlPlaneIpBlock: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `ControlPlaneIpBlock`<sup>Optional</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock"></a>

```go
ControlPlaneIpBlock GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#control_plane_ip_block GkeonpremVmwareAdminCluster#control_plane_ip_block}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock {
	Gateway: *string,
	Ips: interface{},
	Netmask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway">Gateway</a></code> | <code>*string</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips">Ips</a></code> | <code>interface{}</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask">Netmask</a></code> | <code>*string</code> | The netmask used by the VMware Admin Cluster. |

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips"></a>

```go
Ips interface{}
```

- *Type:* interface{}

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps {
	Ip: *string,
	Hostname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip">Ip</a></code> | <code>*string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}

---

### GkeonpremVmwareAdminClusterNetworkConfigHostConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig {
	DnsSearchDomains: *[]*string,
	DnsServers: *[]*string,
	NtpServers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>*[]*string</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers">NtpServers</a></code> | <code>*[]*string</code> | NTP servers. |

---

##### `DnsSearchDomains`<sup>Optional</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```go
DnsSearchDomains *[]*string
```

- *Type:* *[]*string

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#dns_search_domains GkeonpremVmwareAdminCluster#dns_search_domains}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#dns_servers GkeonpremVmwareAdminCluster#dns_servers}

---

##### `NtpServers`<sup>Optional</sup> <a name="NtpServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers"></a>

```go
NtpServers *[]*string
```

- *Type:* *[]*string

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ntp_servers GkeonpremVmwareAdminCluster#ntp_servers}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig {
	IpBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks">IpBlocks</a></code> | <code>interface{}</code> | ip_blocks block. |

---

##### `IpBlocks`<sup>Optional</sup> <a name="IpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```go
IpBlocks interface{}
```

- *Type:* interface{}

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ip_blocks GkeonpremVmwareAdminCluster#ip_blocks}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks {
	Gateway: *string,
	Ips: interface{},
	Netmask: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">Gateway</a></code> | <code>*string</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">Ips</a></code> | <code>interface{}</code> | ips block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">Netmask</a></code> | <code>*string</code> | The netmask used by the VMware Admin Cluster. |

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#gateway GkeonpremVmwareAdminCluster#gateway}

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```go
Ips interface{}
```

- *Type:* interface{}

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ips GkeonpremVmwareAdminCluster#ips}

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#netmask GkeonpremVmwareAdminCluster#netmask}

---

### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps {
	Ip: *string,
	Hostname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">Ip</a></code> | <code>*string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ip GkeonpremVmwareAdminCluster#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#hostname GkeonpremVmwareAdminCluster#hostname}

---

### GkeonpremVmwareAdminClusterPlatformConfig <a name="GkeonpremVmwareAdminClusterPlatformConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPlatformConfig {
	RequiredPlatformVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion">RequiredPlatformVersion</a></code> | <code>*string</code> | The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. |

---

##### `RequiredPlatformVersion`<sup>Optional</sup> <a name="RequiredPlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion"></a>

```go
RequiredPlatformVersion *string
```

- *Type:* *string

The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#required_platform_version GkeonpremVmwareAdminCluster#required_platform_version}

---

### GkeonpremVmwareAdminClusterPlatformConfigBundles <a name="GkeonpremVmwareAdminClusterPlatformConfigBundles" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPlatformConfigBundles {

}
```


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus {

}
```


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions {

}
```


### GkeonpremVmwareAdminClusterPlatformConfigStatus <a name="GkeonpremVmwareAdminClusterPlatformConfigStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPlatformConfigStatus {

}
```


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditions <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions {

}
```


### GkeonpremVmwareAdminClusterPrivateRegistryConfig <a name="GkeonpremVmwareAdminClusterPrivateRegistryConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig {
	Address: *string,
	CaCert: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.address">Address</a></code> | <code>*string</code> | The registry address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.caCert">CaCert</a></code> | <code>*string</code> | The CA certificate public key for private registry. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The registry address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig.property.caCert"></a>

```go
CaCert *string
```

- *Type:* *string

The CA certificate public key for private registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert GkeonpremVmwareAdminCluster#ca_cert}

---

### GkeonpremVmwareAdminClusterStatus <a name="GkeonpremVmwareAdminClusterStatus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterStatus {

}
```


### GkeonpremVmwareAdminClusterStatusConditions <a name="GkeonpremVmwareAdminClusterStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterStatusConditions {

}
```


### GkeonpremVmwareAdminClusterTimeouts <a name="GkeonpremVmwareAdminClusterTimeouts" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#create GkeonpremVmwareAdminCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#delete GkeonpremVmwareAdminCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#update GkeonpremVmwareAdminCluster#update}.

---

### GkeonpremVmwareAdminClusterVcenter <a name="GkeonpremVmwareAdminClusterVcenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

&gkeonpremvmwareadmincluster.GkeonpremVmwareAdminClusterVcenter {
	Address: *string,
	CaCertData: *string,
	Cluster: *string,
	Datacenter: *string,
	DataDisk: *string,
	Datastore: *string,
	Folder: *string,
	ResourcePool: *string,
	StoragePolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.address">Address</a></code> | <code>*string</code> | The vCenter IP address. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.caCertData">CaCertData</a></code> | <code>*string</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.cluster">Cluster</a></code> | <code>*string</code> | The name of the vCenter cluster for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datacenter">Datacenter</a></code> | <code>*string</code> | The name of the vCenter datacenter for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.dataDisk">DataDisk</a></code> | <code>*string</code> | The name of the virtual machine disk (VMDK) for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datastore">Datastore</a></code> | <code>*string</code> | The name of the vCenter datastore for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.folder">Folder</a></code> | <code>*string</code> | The name of the vCenter folder for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.resourcePool">ResourcePool</a></code> | <code>*string</code> | The name of the vCenter resource pool for the admin cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.storagePolicyName">StoragePolicyName</a></code> | <code>*string</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.address"></a>

```go
Address *string
```

- *Type:* *string

The vCenter IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#address GkeonpremVmwareAdminCluster#address}

---

##### `CaCertData`<sup>Optional</sup> <a name="CaCertData" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.caCertData"></a>

```go
CaCertData *string
```

- *Type:* *string

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#ca_cert_data GkeonpremVmwareAdminCluster#ca_cert_data}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The name of the vCenter cluster for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#cluster GkeonpremVmwareAdminCluster#cluster}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

The name of the vCenter datacenter for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#datacenter GkeonpremVmwareAdminCluster#datacenter}

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.dataDisk"></a>

```go
DataDisk *string
```

- *Type:* *string

The name of the virtual machine disk (VMDK) for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#data_disk GkeonpremVmwareAdminCluster#data_disk}

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.datastore"></a>

```go
Datastore *string
```

- *Type:* *string

The name of the vCenter datastore for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#datastore GkeonpremVmwareAdminCluster#datastore}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The name of the vCenter folder for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#folder GkeonpremVmwareAdminCluster#folder}

---

##### `ResourcePool`<sup>Optional</sup> <a name="ResourcePool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.resourcePool"></a>

```go
ResourcePool *string
```

- *Type:* *string

The name of the vCenter resource pool for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#resource_pool GkeonpremVmwareAdminCluster#resource_pool}

---

##### `StoragePolicyName`<sup>Optional</sup> <a name="StoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter.property.storagePolicyName"></a>

```go
StoragePolicyName *string
```

- *Type:* *string

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gkeonprem_vmware_admin_cluster#storage_policy_name GkeonpremVmwareAdminCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference <a name="GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---


### GkeonpremVmwareAdminClusterAddonNodeOutputReference <a name="GkeonpremVmwareAdminClusterAddonNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAddonNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterAddonNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig">PutAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig">ResetAutoResizeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoResizeConfig` <a name="PutAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig"></a>

```go
func PutAutoResizeConfig(value GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `ResetAutoResizeConfig` <a name="ResetAutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig"></a>

```go
func ResetAutoResizeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput">AutoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoResizeConfig`<sup>Required</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig"></a>

```go
func AutoResizeConfig() GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a>

---

##### `AutoResizeConfigInput`<sup>Optional</sup> <a name="AutoResizeConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput"></a>

```go
func AutoResizeConfigInput() GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterAddonNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAddonNode">GkeonpremVmwareAdminClusterAddonNode</a>

---


### GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference <a name="GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">AagConfigDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AagConfigDisabledInput`<sup>Optional</sup> <a name="AagConfigDisabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```go
func AagConfigDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```go
func AagConfigDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterAntiAffinityGroups
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAntiAffinityGroups">GkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---


### GkeonpremVmwareAdminClusterAuthorizationOutputReference <a name="GkeonpremVmwareAdminClusterAuthorizationOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers">PutViewerUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers">ResetViewerUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutViewerUsers` <a name="PutViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers"></a>

```go
func PutViewerUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetViewerUsers` <a name="ResetViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers"></a>

```go
func ResetViewerUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers">ViewerUsers</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput">ViewerUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ViewerUsers`<sup>Required</sup> <a name="ViewerUsers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers"></a>

```go
func ViewerUsers() GkeonpremVmwareAdminClusterAuthorizationViewerUsersList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a>

---

##### `ViewerUsersInput`<sup>Optional</sup> <a name="ViewerUsersInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput"></a>

```go
func ViewerUsersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorization">GkeonpremVmwareAdminClusterAuthorization</a>

---


### GkeonpremVmwareAdminClusterAuthorizationViewerUsersList <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsersList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAuthorizationViewerUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterAuthorizationViewerUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference <a name="GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference <a name="GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterAutoRepairConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterAutoRepairConfig">GkeonpremVmwareAdminClusterAutoRepairConfig</a>

---


### GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference <a name="GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput">CpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus">Cpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```go
func CpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus"></a>

```go
func Cpus() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterControlPlaneNode
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterControlPlaneNode">GkeonpremVmwareAdminClusterControlPlaneNode</a>

---


### GkeonpremVmwareAdminClusterFleetList <a name="GkeonpremVmwareAdminClusterFleetList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterFleetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterFleetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterFleetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterFleetOutputReference <a name="GkeonpremVmwareAdminClusterFleetOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet">GkeonpremVmwareAdminClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterFleet">GkeonpremVmwareAdminClusterFleet</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">ResetSnatPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetSnatPool` <a name="ResetSnatPool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```go
func ResetSnatPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">SnatPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool">SnatPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `SnatPoolInput`<sup>Optional</sup> <a name="SnatPoolInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```go
func SnatPoolInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `SnatPool`<sup>Required</sup> <a name="SnatPool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```go
func SnatPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort">ResetAddonsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">ResetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">ResetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">ResetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">ResetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddonsNodePort` <a name="ResetAddonsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort"></a>

```go
func ResetAddonsNodePort()
```

##### `ResetControlPlaneNodePort` <a name="ResetControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```go
func ResetControlPlaneNodePort()
```

##### `ResetIngressHttpNodePort` <a name="ResetIngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```go
func ResetIngressHttpNodePort()
```

##### `ResetIngressHttpsNodePort` <a name="ResetIngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```go
func ResetIngressHttpsNodePort()
```

##### `ResetKonnectivityServerNodePort` <a name="ResetKonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```go
func ResetKonnectivityServerNodePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput">AddonsNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">ControlPlaneNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">IngressHttpNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">IngressHttpsNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">KonnectivityServerNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort">AddonsNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddonsNodePortInput`<sup>Optional</sup> <a name="AddonsNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput"></a>

```go
func AddonsNodePortInput() *f64
```

- *Type:* *f64

---

##### `ControlPlaneNodePortInput`<sup>Optional</sup> <a name="ControlPlaneNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```go
func ControlPlaneNodePortInput() *f64
```

- *Type:* *f64

---

##### `IngressHttpNodePortInput`<sup>Optional</sup> <a name="IngressHttpNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```go
func IngressHttpNodePortInput() *f64
```

- *Type:* *f64

---

##### `IngressHttpsNodePortInput`<sup>Optional</sup> <a name="IngressHttpsNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```go
func IngressHttpsNodePortInput() *f64
```

- *Type:* *f64

---

##### `KonnectivityServerNodePortInput`<sup>Optional</sup> <a name="KonnectivityServerNodePortInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```go
func KonnectivityServerNodePortInput() *f64
```

- *Type:* *f64

---

##### `AddonsNodePort`<sup>Required</sup> <a name="AddonsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort"></a>

```go
func AddonsNodePort() *f64
```

- *Type:* *f64

---

##### `ControlPlaneNodePort`<sup>Required</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```go
func ControlPlaneNodePort() *f64
```

- *Type:* *f64

---

##### `IngressHttpNodePort`<sup>Required</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```go
func IngressHttpNodePort() *f64
```

- *Type:* *f64

---

##### `IngressHttpsNodePort`<sup>Required</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```go
func IngressHttpsNodePort() *f64
```

- *Type:* *f64

---

##### `KonnectivityServerNodePort`<sup>Required</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```go
func KonnectivityServerNodePort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config">PutF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig">PutManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig">PutMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig">PutVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config">ResetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig">ResetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig">ResetMetalLbConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutF5Config` <a name="PutF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config"></a>

```go
func PutF5Config(value GkeonpremVmwareAdminClusterLoadBalancerF5Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `PutManualLbConfig` <a name="PutManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```go
func PutManualLbConfig(value GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `PutMetalLbConfig` <a name="PutMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```go
func PutMetalLbConfig(value GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `PutVipConfig` <a name="PutVipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```go
func PutVipConfig(value GkeonpremVmwareAdminClusterLoadBalancerVipConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `ResetF5Config` <a name="ResetF5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config"></a>

```go
func ResetF5Config()
```

##### `ResetManualLbConfig` <a name="ResetManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```go
func ResetManualLbConfig()
```

##### `ResetMetalLbConfig` <a name="ResetMetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```go
func ResetMetalLbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput">F5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">ManualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput">MetalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput">VipConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `F5Config`<sup>Required</sup> <a name="F5Config" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config"></a>

```go
func F5Config() GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `ManualLbConfig`<sup>Required</sup> <a name="ManualLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```go
func ManualLbConfig() GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `MetalLbConfig`<sup>Required</sup> <a name="MetalLbConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```go
func MetalLbConfig() GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```go
func VipConfig() GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `F5ConfigInput`<sup>Optional</sup> <a name="F5ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```go
func F5ConfigInput() GkeonpremVmwareAdminClusterLoadBalancerF5Config
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerF5Config">GkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `ManualLbConfigInput`<sup>Optional</sup> <a name="ManualLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```go
func ManualLbConfigInput() GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `MetalLbConfigInput`<sup>Optional</sup> <a name="MetalLbConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```go
func MetalLbConfigInput() GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `VipConfigInput`<sup>Optional</sup> <a name="VipConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```go
func VipConfigInput() GkeonpremVmwareAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancer">GkeonpremVmwareAdminClusterLoadBalancer</a>

---


### GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference <a name="GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip">ResetAddonsVip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddonsVip` <a name="ResetAddonsVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip"></a>

```go
func ResetAddonsVip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput">AddonsVipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">ControlPlaneVipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip">AddonsVip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddonsVipInput`<sup>Optional</sup> <a name="AddonsVipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput"></a>

```go
func AddonsVipInput() *string
```

- *Type:* *string

---

##### `ControlPlaneVipInput`<sup>Optional</sup> <a name="ControlPlaneVipInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```go
func ControlPlaneVipInput() *string
```

- *Type:* *string

---

##### `AddonsVip`<sup>Required</sup> <a name="AddonsVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip"></a>

```go
func AddonsVip() *string
```

- *Type:* *string

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```go
func ControlPlaneVip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterLoadBalancerVipConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterLoadBalancerVipConfig">GkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```go
func ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps">PutIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps"></a>

```go
func PutIps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput">IpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```go
func Ips() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```go
func IpsInput() interface{}
```

- *Type:* interface{}

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock">PutControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock">ResetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlaneIpBlock` <a name="PutControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock"></a>

```go
func PutControlPlaneIpBlock(value GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `ResetControlPlaneIpBlock` <a name="ResetControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock"></a>

```go
func ResetControlPlaneIpBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput">ControlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPlaneIpBlock`<sup>Required</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock"></a>

```go
func ControlPlaneIpBlock() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a>

---

##### `ControlPlaneIpBlockInput`<sup>Optional</sup> <a name="ControlPlaneIpBlockInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```go
func ControlPlaneIpBlockInput() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">ResetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers">ResetNtpServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsSearchDomains` <a name="ResetDnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```go
func ResetDnsSearchDomains()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```go
func ResetDnsServers()
```

##### `ResetNtpServers` <a name="ResetNtpServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```go
func ResetNtpServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">DnsSearchDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">NtpServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers">NtpServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsSearchDomainsInput`<sup>Optional</sup> <a name="DnsSearchDomainsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```go
func DnsSearchDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NtpServersInput`<sup>Optional</sup> <a name="NtpServersInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```go
func NtpServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSearchDomains`<sup>Required</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```go
func DnsSearchDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```go
func NtpServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig">PutDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig">PutHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig">PutHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig">PutStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig">ResetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig">ResetHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig">ResetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig">ResetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork">ResetVcenterNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDhcpIpConfig` <a name="PutDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```go
func PutDhcpIpConfig(value GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `PutHaControlPlaneConfig` <a name="PutHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig"></a>

```go
func PutHaControlPlaneConfig(value GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `PutHostConfig` <a name="PutHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig"></a>

```go
func PutHostConfig(value GkeonpremVmwareAdminClusterNetworkConfigHostConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `PutStaticIpConfig` <a name="PutStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```go
func PutStaticIpConfig(value GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `ResetDhcpIpConfig` <a name="ResetDhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```go
func ResetDhcpIpConfig()
```

##### `ResetHaControlPlaneConfig` <a name="ResetHaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig"></a>

```go
func ResetHaControlPlaneConfig()
```

##### `ResetHostConfig` <a name="ResetHostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig"></a>

```go
func ResetHostConfig()
```

##### `ResetStaticIpConfig` <a name="ResetStaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```go
func ResetStaticIpConfig()
```

##### `ResetVcenterNetwork` <a name="ResetVcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```go
func ResetVcenterNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig">HaControlPlaneConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">DhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput">HaControlPlaneConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput">HostConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput">StaticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput">VcenterNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork">VcenterNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhcpIpConfig`<sup>Required</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```go
func DhcpIpConfig() GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `HaControlPlaneConfig`<sup>Required</sup> <a name="HaControlPlaneConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig"></a>

```go
func HaControlPlaneConfig() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a>

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig"></a>

```go
func HostConfig() GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a>

---

##### `StaticIpConfig`<sup>Required</sup> <a name="StaticIpConfig" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```go
func StaticIpConfig() GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `DhcpIpConfigInput`<sup>Optional</sup> <a name="DhcpIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```go
func DhcpIpConfigInput() GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `HaControlPlaneConfigInput`<sup>Optional</sup> <a name="HaControlPlaneConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput"></a>

```go
func HaControlPlaneConfigInput() GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `HostConfigInput`<sup>Optional</sup> <a name="HostConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```go
func HostConfigInput() GkeonpremVmwareAdminClusterNetworkConfigHostConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigHostConfig">GkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```go
func PodAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```go
func ServiceAddressCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `StaticIpConfigInput`<sup>Optional</sup> <a name="StaticIpConfigInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```go
func StaticIpConfigInput() GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `VcenterNetworkInput`<sup>Optional</sup> <a name="VcenterNetworkInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```go
func VcenterNetworkInput() *string
```

- *Type:* *string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```go
func PodAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```go
func ServiceAddressCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `VcenterNetwork`<sup>Required</sup> <a name="VcenterNetwork" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```go
func VcenterNetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfig">GkeonpremVmwareAdminClusterNetworkConfig</a>

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```go
func ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">PutIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```go
func PutIps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">IpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```go
func Ips() GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```go
func IpsInput() interface{}
```

- *Type:* interface{}

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference <a name="GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">PutIpBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks">ResetIpBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpBlocks` <a name="PutIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```go
func PutIpBlocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIpBlocks` <a name="ResetIpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks"></a>

```go
func ResetIpBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">IpBlocks</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">IpBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```go
func IpBlocks() GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `IpBlocksInput`<sup>Optional</sup> <a name="IpBlocksInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```go
func IpBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigBundlesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterPlatformConfigBundlesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles">GkeonpremVmwareAdminClusterPlatformConfigBundles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status"></a>

```go
func Status() GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPlatformConfigBundles
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundles">GkeonpremVmwareAdminClusterPlatformConfigBundles</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions"></a>

```go
func Conditions() GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterPlatformConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion">ResetRequiredPlatformVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequiredPlatformVersion` <a name="ResetRequiredPlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion"></a>

```go
func ResetRequiredPlatformVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles">Bundles</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList">GkeonpremVmwareAdminClusterPlatformConfigBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList">GkeonpremVmwareAdminClusterPlatformConfigStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput">RequiredPlatformVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion">RequiredPlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bundles`<sup>Required</sup> <a name="Bundles" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles"></a>

```go
func Bundles() GkeonpremVmwareAdminClusterPlatformConfigBundlesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigBundlesList">GkeonpremVmwareAdminClusterPlatformConfigBundlesList</a>

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status"></a>

```go
func Status() GkeonpremVmwareAdminClusterPlatformConfigStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList">GkeonpremVmwareAdminClusterPlatformConfigStatusList</a>

---

##### `RequiredPlatformVersionInput`<sup>Optional</sup> <a name="RequiredPlatformVersionInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput"></a>

```go
func RequiredPlatformVersionInput() *string
```

- *Type:* *string

---

##### `RequiredPlatformVersion`<sup>Required</sup> <a name="RequiredPlatformVersion" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion"></a>

```go
func RequiredPlatformVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfig">GkeonpremVmwareAdminClusterPlatformConfig</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPlatformConfigStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a>

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusList <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterPlatformConfigStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference <a name="GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus">GkeonpremVmwareAdminClusterPlatformConfigStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions"></a>

```go
func Conditions() GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPlatformConfigStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPlatformConfigStatus">GkeonpremVmwareAdminClusterPlatformConfigStatus</a>

---


### GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference <a name="GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetCaCert">ResetCaCert</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.resetCaCert"></a>

```go
func ResetCaCert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCertInput">CaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCert">CaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCertInput"></a>

```go
func CaCertInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.caCert"></a>

```go
func CaCert() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterPrivateRegistryConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterPrivateRegistryConfig">GkeonpremVmwareAdminClusterPrivateRegistryConfig</a>

---


### GkeonpremVmwareAdminClusterStatusConditionsList <a name="GkeonpremVmwareAdminClusterStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterStatusConditionsOutputReference <a name="GkeonpremVmwareAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions">GkeonpremVmwareAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditions">GkeonpremVmwareAdminClusterStatusConditions</a>

---


### GkeonpremVmwareAdminClusterStatusList <a name="GkeonpremVmwareAdminClusterStatusList" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareAdminClusterStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareAdminClusterStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareAdminClusterStatusOutputReference <a name="GkeonpremVmwareAdminClusterStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareAdminClusterStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList">GkeonpremVmwareAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus">GkeonpremVmwareAdminClusterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.conditions"></a>

```go
func Conditions() GkeonpremVmwareAdminClusterStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusConditionsList">GkeonpremVmwareAdminClusterStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterStatus">GkeonpremVmwareAdminClusterStatus</a>

---


### GkeonpremVmwareAdminClusterTimeoutsOutputReference <a name="GkeonpremVmwareAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareAdminClusterVcenterOutputReference <a name="GkeonpremVmwareAdminClusterVcenterOutputReference" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkeonpremvmwareadmincluster"

gkeonpremvmwareadmincluster.NewGkeonpremVmwareAdminClusterVcenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareAdminClusterVcenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData">ResetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk">ResetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool">ResetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName">ResetStoragePolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetCaCertData` <a name="ResetCaCertData" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData"></a>

```go
func ResetCaCertData()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk"></a>

```go
func ResetDataDisk()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore"></a>

```go
func ResetDatastore()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetResourcePool` <a name="ResetResourcePool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool"></a>

```go
func ResetResourcePool()
```

##### `ResetStoragePolicyName` <a name="ResetStoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName"></a>

```go
func ResetStoragePolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput">CaCertDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput">DataDiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput">DatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput">ResourcePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput">StoragePolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData">CaCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk">DataDisk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool">ResourcePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName">StoragePolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `CaCertDataInput`<sup>Optional</sup> <a name="CaCertDataInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput"></a>

```go
func CaCertDataInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput"></a>

```go
func DataDiskInput() *string
```

- *Type:* *string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput"></a>

```go
func DatastoreInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `ResourcePoolInput`<sup>Optional</sup> <a name="ResourcePoolInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput"></a>

```go
func ResourcePoolInput() *string
```

- *Type:* *string

---

##### `StoragePolicyNameInput`<sup>Optional</sup> <a name="StoragePolicyNameInput" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```go
func StoragePolicyNameInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CaCertData`<sup>Required</sup> <a name="CaCertData" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData"></a>

```go
func CaCertData() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk"></a>

```go
func DataDisk() *string
```

- *Type:* *string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `ResourcePool`<sup>Required</sup> <a name="ResourcePool" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool"></a>

```go
func ResourcePool() *string
```

- *Type:* *string

---

##### `StoragePolicyName`<sup>Required</sup> <a name="StoragePolicyName" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName"></a>

```go
func StoragePolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareAdminClusterVcenter
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareAdminCluster.GkeonpremVmwareAdminClusterVcenter">GkeonpremVmwareAdminClusterVcenter</a>

---




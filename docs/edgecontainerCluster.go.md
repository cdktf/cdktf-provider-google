# `edgecontainerCluster` Submodule <a name="`edgecontainerCluster` Submodule" id="@cdktf/provider-google.edgecontainerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerCluster <a name="EdgecontainerCluster" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster google_edgecontainer_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerCluster(scope Construct, id *string, config EdgecontainerClusterConfig) EdgecontainerCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig">EdgecontainerClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig">EdgecontainerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption">PutControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig">PutSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlaneEncryption">ResetControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetDefaultMaxPodsPerNode">ResetDefaultMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools">ResetExternalLoadBalancerIpv4AddressPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetReleaseChannel">ResetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetSystemAddonsConfig">ResetSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTargetVersion">ResetTargetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization"></a>

```go
func PutAuthorization(value EdgecontainerClusterAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane"></a>

```go
func PutControlPlane(value EdgecontainerClusterControlPlane)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---

##### `PutControlPlaneEncryption` <a name="PutControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption"></a>

```go
func PutControlPlaneEncryption(value EdgecontainerClusterControlPlaneEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putControlPlaneEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet"></a>

```go
func PutFleet(value EdgecontainerClusterFleet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value EdgecontainerClusterMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking"></a>

```go
func PutNetworking(value EdgecontainerClusterNetworking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---

##### `PutSystemAddonsConfig` <a name="PutSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig"></a>

```go
func PutSystemAddonsConfig(value EdgecontainerClusterSystemAddonsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putSystemAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts"></a>

```go
func PutTimeouts(value EdgecontainerClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

---

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlane"></a>

```go
func ResetControlPlane()
```

##### `ResetControlPlaneEncryption` <a name="ResetControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetControlPlaneEncryption"></a>

```go
func ResetControlPlaneEncryption()
```

##### `ResetDefaultMaxPodsPerNode` <a name="ResetDefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetDefaultMaxPodsPerNode"></a>

```go
func ResetDefaultMaxPodsPerNode()
```

##### `ResetExternalLoadBalancerIpv4AddressPools` <a name="ResetExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools"></a>

```go
func ResetExternalLoadBalancerIpv4AddressPools()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReleaseChannel` <a name="ResetReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetReleaseChannel"></a>

```go
func ResetReleaseChannel()
```

##### `ResetSystemAddonsConfig` <a name="ResetSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetSystemAddonsConfig"></a>

```go
func ResetSystemAddonsConfig()
```

##### `ResetTargetVersion` <a name="ResetTargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTargetVersion"></a>

```go
func ResetTargetVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EdgecontainerCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.EdgecontainerCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.EdgecontainerCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.EdgecontainerCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.EdgecontainerCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EdgecontainerCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EdgecontainerCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EdgecontainerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference">EdgecontainerClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference">EdgecontainerClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryption">ControlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference">EdgecontainerClusterControlPlaneEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneVersion">ControlPlaneVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference">EdgecontainerClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenanceEvents">MaintenanceEvents</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList">EdgecontainerClusterMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference">EdgecontainerClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference">EdgecontainerClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nodeVersion">NodeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfig">SystemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference">EdgecontainerClusterSystemAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference">EdgecontainerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryptionInput">ControlPlaneEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNodeInput">DefaultMaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput">ExternalLoadBalancerIpv4AddressPoolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannelInput">ReleaseChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfigInput">SystemAddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersionInput">TargetVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNode">DefaultMaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools">ExternalLoadBalancerIpv4AddressPools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannel">ReleaseChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorization"></a>

```go
func Authorization() EdgecontainerClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference">EdgecontainerClusterAuthorizationOutputReference</a>

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.clusterCaCertificate"></a>

```go
func ClusterCaCertificate() *string
```

- *Type:* *string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlane"></a>

```go
func ControlPlane() EdgecontainerClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference">EdgecontainerClusterControlPlaneOutputReference</a>

---

##### `ControlPlaneEncryption`<sup>Required</sup> <a name="ControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryption"></a>

```go
func ControlPlaneEncryption() EdgecontainerClusterControlPlaneEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference">EdgecontainerClusterControlPlaneEncryptionOutputReference</a>

---

##### `ControlPlaneVersion`<sup>Required</sup> <a name="ControlPlaneVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneVersion"></a>

```go
func ControlPlaneVersion() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleet"></a>

```go
func Fleet() EdgecontainerClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference">EdgecontainerClusterFleetOutputReference</a>

---

##### `MaintenanceEvents`<sup>Required</sup> <a name="MaintenanceEvents" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenanceEvents"></a>

```go
func MaintenanceEvents() EdgecontainerClusterMaintenanceEventsList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList">EdgecontainerClusterMaintenanceEventsList</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() EdgecontainerClusterMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference">EdgecontainerClusterMaintenancePolicyOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networking"></a>

```go
func Networking() EdgecontainerClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference">EdgecontainerClusterNetworkingOutputReference</a>

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nodeVersion"></a>

```go
func NodeVersion() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemAddonsConfig`<sup>Required</sup> <a name="SystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfig"></a>

```go
func SystemAddonsConfig() EdgecontainerClusterSystemAddonsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference">EdgecontainerClusterSystemAddonsConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeouts"></a>

```go
func Timeouts() EdgecontainerClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference">EdgecontainerClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.authorizationInput"></a>

```go
func AuthorizationInput() EdgecontainerClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---

##### `ControlPlaneEncryptionInput`<sup>Optional</sup> <a name="ControlPlaneEncryptionInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneEncryptionInput"></a>

```go
func ControlPlaneEncryptionInput() EdgecontainerClusterControlPlaneEncryption
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.controlPlaneInput"></a>

```go
func ControlPlaneInput() EdgecontainerClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---

##### `DefaultMaxPodsPerNodeInput`<sup>Optional</sup> <a name="DefaultMaxPodsPerNodeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNodeInput"></a>

```go
func DefaultMaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ExternalLoadBalancerIpv4AddressPoolsInput`<sup>Optional</sup> <a name="ExternalLoadBalancerIpv4AddressPoolsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput"></a>

```go
func ExternalLoadBalancerIpv4AddressPoolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.fleetInput"></a>

```go
func FleetInput() EdgecontainerClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() EdgecontainerClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.networkingInput"></a>

```go
func NetworkingInput() EdgecontainerClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReleaseChannelInput`<sup>Optional</sup> <a name="ReleaseChannelInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannelInput"></a>

```go
func ReleaseChannelInput() *string
```

- *Type:* *string

---

##### `SystemAddonsConfigInput`<sup>Optional</sup> <a name="SystemAddonsConfigInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.systemAddonsConfigInput"></a>

```go
func SystemAddonsConfigInput() EdgecontainerClusterSystemAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---

##### `TargetVersionInput`<sup>Optional</sup> <a name="TargetVersionInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersionInput"></a>

```go
func TargetVersionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultMaxPodsPerNode`<sup>Required</sup> <a name="DefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.defaultMaxPodsPerNode"></a>

```go
func DefaultMaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `ExternalLoadBalancerIpv4AddressPools`<sup>Required</sup> <a name="ExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools"></a>

```go
func ExternalLoadBalancerIpv4AddressPools() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReleaseChannel`<sup>Required</sup> <a name="ReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.releaseChannel"></a>

```go
func ReleaseChannel() *string
```

- *Type:* *string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerClusterAuthorization <a name="EdgecontainerClusterAuthorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterAuthorization {
	AdminUsers: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | admin_users block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization.property.adminUsers"></a>

```go
AdminUsers EdgecontainerClusterAuthorizationAdminUsers
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#admin_users EdgecontainerCluster#admin_users}

---

### EdgecontainerClusterAuthorizationAdminUsers <a name="EdgecontainerClusterAuthorizationAdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterAuthorizationAdminUsers {
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>*string</code> | An active Google username. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#username EdgecontainerCluster#username}

---

### EdgecontainerClusterConfig <a name="EdgecontainerClusterConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Authorization: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterAuthorization,
	Fleet: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterFleet,
	Location: *string,
	Name: *string,
	Networking: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterNetworking,
	ControlPlane: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterControlPlane,
	ControlPlaneEncryption: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption,
	DefaultMaxPodsPerNode: *f64,
	ExternalLoadBalancerIpv4AddressPools: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	MaintenancePolicy: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy,
	Project: *string,
	ReleaseChannel: *string,
	SystemAddonsConfig: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig,
	TargetVersion: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.name">Name</a></code> | <code>*string</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlaneEncryption">ControlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.defaultMaxPodsPerNode">DefaultMaxPodsPerNode</a></code> | <code>*f64</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools">ExternalLoadBalancerIpv4AddressPools</a></code> | <code>*[]*string</code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.releaseChannel">ReleaseChannel</a></code> | <code>*string</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.systemAddonsConfig">SystemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.authorization"></a>

```go
Authorization EdgecontainerClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#authorization EdgecontainerCluster#authorization}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.fleet"></a>

```go
Fleet EdgecontainerClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#fleet EdgecontainerCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#location EdgecontainerCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#name EdgecontainerCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.networking"></a>

```go
Networking EdgecontainerClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#networking EdgecontainerCluster#networking}

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlane"></a>

```go
ControlPlane EdgecontainerClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#control_plane EdgecontainerCluster#control_plane}

---

##### `ControlPlaneEncryption`<sup>Optional</sup> <a name="ControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.controlPlaneEncryption"></a>

```go
ControlPlaneEncryption EdgecontainerClusterControlPlaneEncryption
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#control_plane_encryption EdgecontainerCluster#control_plane_encryption}

---

##### `DefaultMaxPodsPerNode`<sup>Optional</sup> <a name="DefaultMaxPodsPerNode" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.defaultMaxPodsPerNode"></a>

```go
DefaultMaxPodsPerNode *f64
```

- *Type:* *f64

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#default_max_pods_per_node EdgecontainerCluster#default_max_pods_per_node}

---

##### `ExternalLoadBalancerIpv4AddressPools`<sup>Optional</sup> <a name="ExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools"></a>

```go
ExternalLoadBalancerIpv4AddressPools *[]*string
```

- *Type:* *[]*string

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#external_load_balancer_ipv4_address_pools EdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#labels EdgecontainerCluster#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy EdgecontainerClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#maintenance_policy EdgecontainerCluster#maintenance_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}.

---

##### `ReleaseChannel`<sup>Optional</sup> <a name="ReleaseChannel" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.releaseChannel"></a>

```go
ReleaseChannel *string
```

- *Type:* *string

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#release_channel EdgecontainerCluster#release_channel}

---

##### `SystemAddonsConfig`<sup>Optional</sup> <a name="SystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.systemAddonsConfig"></a>

```go
SystemAddonsConfig EdgecontainerClusterSystemAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#system_addons_config EdgecontainerCluster#system_addons_config}

---

##### `TargetVersion`<sup>Optional</sup> <a name="TargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.targetVersion"></a>

```go
TargetVersion *string
```

- *Type:* *string

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#target_version EdgecontainerCluster#target_version}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterConfig.property.timeouts"></a>

```go
Timeouts EdgecontainerClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts">EdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#timeouts EdgecontainerCluster#timeouts}

---

### EdgecontainerClusterControlPlane <a name="EdgecontainerClusterControlPlane" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterControlPlane {
	Local: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal,
	Remote: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.local">Local</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | remote block. |

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.local"></a>

```go
Local EdgecontainerClusterControlPlaneLocal
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#local EdgecontainerCluster#local}

---

##### `Remote`<sup>Optional</sup> <a name="Remote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane.property.remote"></a>

```go
Remote EdgecontainerClusterControlPlaneRemote
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#remote EdgecontainerCluster#remote}

---

### EdgecontainerClusterControlPlaneEncryption <a name="EdgecontainerClusterControlPlaneEncryption" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterControlPlaneEncryption {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#kms_key EdgecontainerCluster#kms_key}

---

### EdgecontainerClusterControlPlaneEncryptionKmsStatus <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatus" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus {

}
```


### EdgecontainerClusterControlPlaneLocal <a name="EdgecontainerClusterControlPlaneLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterControlPlaneLocal {
	MachineFilter: *string,
	NodeCount: *f64,
	NodeLocation: *string,
	SharedDeploymentPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.machineFilter">MachineFilter</a></code> | <code>*string</code> | Only machines matching this filter will be allowed to host control plane nodes. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeLocation">NodeLocation</a></code> | <code>*string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy">SharedDeploymentPolicy</a></code> | <code>*string</code> | Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. |

---

##### `MachineFilter`<sup>Optional</sup> <a name="MachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.machineFilter"></a>

```go
MachineFilter *string
```

- *Type:* *string

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#machine_filter EdgecontainerCluster#machine_filter}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#node_count EdgecontainerCluster#node_count}

---

##### `NodeLocation`<sup>Optional</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.nodeLocation"></a>

```go
NodeLocation *string
```

- *Type:* *string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}

---

##### `SharedDeploymentPolicy`<sup>Optional</sup> <a name="SharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy"></a>

```go
SharedDeploymentPolicy *string
```

- *Type:* *string

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#shared_deployment_policy EdgecontainerCluster#shared_deployment_policy}

---

### EdgecontainerClusterControlPlaneRemote <a name="EdgecontainerClusterControlPlaneRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterControlPlaneRemote {
	NodeLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.property.nodeLocation">NodeLocation</a></code> | <code>*string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |

---

##### `NodeLocation`<sup>Optional</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote.property.nodeLocation"></a>

```go
NodeLocation *string
```

- *Type:* *string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}

---

### EdgecontainerClusterFleet <a name="EdgecontainerClusterFleet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterFleet {
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.property.project">Project</a></code> | <code>*string</code> | The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}

---

### EdgecontainerClusterMaintenanceEvents <a name="EdgecontainerClusterMaintenanceEvents" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenanceEvents {

}
```


### EdgecontainerClusterMaintenancePolicy <a name="EdgecontainerClusterMaintenancePolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenancePolicy {
	Window: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow,
	MaintenanceExclusions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | window block. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions">MaintenanceExclusions</a></code> | <code>interface{}</code> | maintenance_exclusions block. |

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.window"></a>

```go
Window EdgecontainerClusterMaintenancePolicyWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

##### `MaintenanceExclusions`<sup>Optional</sup> <a name="MaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions"></a>

```go
MaintenanceExclusions interface{}
```

- *Type:* interface{}

maintenance_exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#maintenance_exclusions EdgecontainerCluster#maintenance_exclusions}

---

### EdgecontainerClusterMaintenancePolicyMaintenanceExclusions <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions {
	Id: *string,
	Window: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id">Id</a></code> | <code>*string</code> | A unique (per cluster) id for the window. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | window block. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id"></a>

```go
Id *string
```

- *Type:* *string

A unique (per cluster) id for the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window"></a>

```go
Window EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime">EndTime</a></code> | <code>*string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime">StartTime</a></code> | <code>*string</code> | The time that the window first starts. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}

---

### EdgecontainerClusterMaintenancePolicyWindow <a name="EdgecontainerClusterMaintenancePolicyWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenancePolicyWindow {
	RecurringWindow: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow">RecurringWindow</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | recurring_window block. |

---

##### `RecurringWindow`<sup>Required</sup> <a name="RecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow"></a>

```go
RecurringWindow EdgecontainerClusterMaintenancePolicyWindowRecurringWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#recurring_window EdgecontainerCluster#recurring_window}

---

### EdgecontainerClusterMaintenancePolicyWindowRecurringWindow <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow {
	Recurrence: *string,
	Window: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence">Recurrence</a></code> | <code>*string</code> | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | window block. |

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence"></a>

```go
Recurrence *string
```

- *Type:* *string

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#recurrence EdgecontainerCluster#recurrence}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window"></a>

```go
Window EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}

---

### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime">EndTime</a></code> | <code>*string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime">StartTime</a></code> | <code>*string</code> | The time that the window first starts. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}

---

### EdgecontainerClusterNetworking <a name="EdgecontainerClusterNetworking" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterNetworking {
	ClusterIpv4CidrBlocks: *[]*string,
	ServicesIpv4CidrBlocks: *[]*string,
	ClusterIpv6CidrBlocks: *[]*string,
	ServicesIpv6CidrBlocks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks">ClusterIpv4CidrBlocks</a></code> | <code>*[]*string</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks">ServicesIpv4CidrBlocks</a></code> | <code>*[]*string</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks">ClusterIpv6CidrBlocks</a></code> | <code>*[]*string</code> | If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks">ServicesIpv6CidrBlocks</a></code> | <code>*[]*string</code> | If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |

---

##### `ClusterIpv4CidrBlocks`<sup>Required</sup> <a name="ClusterIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks"></a>

```go
ClusterIpv4CidrBlocks *[]*string
```

- *Type:* *[]*string

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#cluster_ipv4_cidr_blocks EdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

##### `ServicesIpv4CidrBlocks`<sup>Required</sup> <a name="ServicesIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks"></a>

```go
ServicesIpv4CidrBlocks *[]*string
```

- *Type:* *[]*string

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#services_ipv4_cidr_blocks EdgecontainerCluster#services_ipv4_cidr_blocks}

---

##### `ClusterIpv6CidrBlocks`<sup>Optional</sup> <a name="ClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks"></a>

```go
ClusterIpv6CidrBlocks *[]*string
```

- *Type:* *[]*string

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#cluster_ipv6_cidr_blocks EdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

##### `ServicesIpv6CidrBlocks`<sup>Optional</sup> <a name="ServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks"></a>

```go
ServicesIpv6CidrBlocks *[]*string
```

- *Type:* *[]*string

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#services_ipv6_cidr_blocks EdgecontainerCluster#services_ipv6_cidr_blocks}

---

### EdgecontainerClusterSystemAddonsConfig <a name="EdgecontainerClusterSystemAddonsConfig" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterSystemAddonsConfig {
	Ingress: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | ingress block. |

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig.property.ingress"></a>

```go
Ingress EdgecontainerClusterSystemAddonsConfigIngress
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#ingress EdgecontainerCluster#ingress}

---

### EdgecontainerClusterSystemAddonsConfigIngress <a name="EdgecontainerClusterSystemAddonsConfigIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterSystemAddonsConfigIngress {
	Disabled: interface{},
	Ipv4Vip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether Ingress is disabled. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip">Ipv4Vip</a></code> | <code>*string</code> | Ingress VIP. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#disabled EdgecontainerCluster#disabled}

---

##### `Ipv4Vip`<sup>Optional</sup> <a name="Ipv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip"></a>

```go
Ipv4Vip *string
```

- *Type:* *string

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#ipv4_vip EdgecontainerCluster#ipv4_vip}

---

### EdgecontainerClusterTimeouts <a name="EdgecontainerClusterTimeouts" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

&edgecontainercluster.EdgecontainerClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerClusterAuthorizationAdminUsersOutputReference <a name="EdgecontainerClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterAuthorizationAdminUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterAuthorizationAdminUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterAuthorizationAdminUsers
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---


### EdgecontainerClusterAuthorizationOutputReference <a name="EdgecontainerClusterAuthorizationOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers"></a>

```go
func PutAdminUsers(value EdgecontainerClusterAuthorizationAdminUsers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference">EdgecontainerClusterAuthorizationAdminUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsers"></a>

```go
func AdminUsers() EdgecontainerClusterAuthorizationAdminUsersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsersOutputReference">EdgecontainerClusterAuthorizationAdminUsersOutputReference</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```go
func AdminUsersInput() EdgecontainerClusterAuthorizationAdminUsers
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationAdminUsers">EdgecontainerClusterAuthorizationAdminUsers</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterAuthorization">EdgecontainerClusterAuthorization</a>

---


### EdgecontainerClusterControlPlaneEncryptionKmsStatusList <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatusList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterControlPlaneEncryptionKmsStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EdgecontainerClusterControlPlaneEncryptionKmsStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get"></a>

```go
func Get(index *f64) EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference <a name="EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus">EdgecontainerClusterControlPlaneEncryptionKmsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterControlPlaneEncryptionKmsStatus
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatus">EdgecontainerClusterControlPlaneEncryptionKmsStatus</a>

---


### EdgecontainerClusterControlPlaneEncryptionOutputReference <a name="EdgecontainerClusterControlPlaneEncryptionOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterControlPlaneEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterControlPlaneEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion">KmsKeyActiveVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState">KmsKeyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus">KmsStatus</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList">EdgecontainerClusterControlPlaneEncryptionKmsStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyActiveVersion`<sup>Required</sup> <a name="KmsKeyActiveVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```go
func KmsKeyActiveVersion() *string
```

- *Type:* *string

---

##### `KmsKeyState`<sup>Required</sup> <a name="KmsKeyState" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState"></a>

```go
func KmsKeyState() *string
```

- *Type:* *string

---

##### `KmsStatus`<sup>Required</sup> <a name="KmsStatus" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus"></a>

```go
func KmsStatus() EdgecontainerClusterControlPlaneEncryptionKmsStatusList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionKmsStatusList">EdgecontainerClusterControlPlaneEncryptionKmsStatusList</a>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterControlPlaneEncryption
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneEncryption">EdgecontainerClusterControlPlaneEncryption</a>

---


### EdgecontainerClusterControlPlaneLocalOutputReference <a name="EdgecontainerClusterControlPlaneLocalOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterControlPlaneLocalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterControlPlaneLocalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter">ResetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation">ResetNodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy">ResetSharedDeploymentPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMachineFilter` <a name="ResetMachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter"></a>

```go
func ResetMachineFilter()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetNodeLocation` <a name="ResetNodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation"></a>

```go
func ResetNodeLocation()
```

##### `ResetSharedDeploymentPolicy` <a name="ResetSharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy"></a>

```go
func ResetSharedDeploymentPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput">MachineFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput">NodeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput">SharedDeploymentPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter">MachineFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation">NodeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy">SharedDeploymentPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineFilterInput`<sup>Optional</sup> <a name="MachineFilterInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput"></a>

```go
func MachineFilterInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput"></a>

```go
func NodeLocationInput() *string
```

- *Type:* *string

---

##### `SharedDeploymentPolicyInput`<sup>Optional</sup> <a name="SharedDeploymentPolicyInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput"></a>

```go
func SharedDeploymentPolicyInput() *string
```

- *Type:* *string

---

##### `MachineFilter`<sup>Required</sup> <a name="MachineFilter" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter"></a>

```go
func MachineFilter() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation"></a>

```go
func NodeLocation() *string
```

- *Type:* *string

---

##### `SharedDeploymentPolicy`<sup>Required</sup> <a name="SharedDeploymentPolicy" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy"></a>

```go
func SharedDeploymentPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterControlPlaneLocal
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---


### EdgecontainerClusterControlPlaneOutputReference <a name="EdgecontainerClusterControlPlaneOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterControlPlaneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterControlPlaneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal">PutLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote">PutRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetRemote">ResetRemote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocal` <a name="PutLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal"></a>

```go
func PutLocal(value EdgecontainerClusterControlPlaneLocal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---

##### `PutRemote` <a name="PutRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote"></a>

```go
func PutRemote(value EdgecontainerClusterControlPlaneRemote)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetLocal"></a>

```go
func ResetLocal()
```

##### `ResetRemote` <a name="ResetRemote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.resetRemote"></a>

```go
func ResetRemote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.local">Local</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference">EdgecontainerClusterControlPlaneLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference">EdgecontainerClusterControlPlaneRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.localInput">LocalInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remoteInput">RemoteInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.local"></a>

```go
func Local() EdgecontainerClusterControlPlaneLocalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocalOutputReference">EdgecontainerClusterControlPlaneLocalOutputReference</a>

---

##### `Remote`<sup>Required</sup> <a name="Remote" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remote"></a>

```go
func Remote() EdgecontainerClusterControlPlaneRemoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference">EdgecontainerClusterControlPlaneRemoteOutputReference</a>

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.localInput"></a>

```go
func LocalInput() EdgecontainerClusterControlPlaneLocal
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneLocal">EdgecontainerClusterControlPlaneLocal</a>

---

##### `RemoteInput`<sup>Optional</sup> <a name="RemoteInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.remoteInput"></a>

```go
func RemoteInput() EdgecontainerClusterControlPlaneRemote
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlane">EdgecontainerClusterControlPlane</a>

---


### EdgecontainerClusterControlPlaneRemoteOutputReference <a name="EdgecontainerClusterControlPlaneRemoteOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterControlPlaneRemoteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterControlPlaneRemoteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation">ResetNodeLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeLocation` <a name="ResetNodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation"></a>

```go
func ResetNodeLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput">NodeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation">NodeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput"></a>

```go
func NodeLocationInput() *string
```

- *Type:* *string

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation"></a>

```go
func NodeLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterControlPlaneRemote
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterControlPlaneRemote">EdgecontainerClusterControlPlaneRemote</a>

---


### EdgecontainerClusterFleetOutputReference <a name="EdgecontainerClusterFleetOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterFleetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterFleetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.membership">Membership</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.membership"></a>

```go
func Membership() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleetOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterFleet">EdgecontainerClusterFleet</a>

---


### EdgecontainerClusterMaintenanceEventsList <a name="EdgecontainerClusterMaintenanceEventsList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenanceEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EdgecontainerClusterMaintenanceEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get"></a>

```go
func Get(index *f64) EdgecontainerClusterMaintenanceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EdgecontainerClusterMaintenanceEventsOutputReference <a name="EdgecontainerClusterMaintenanceEventsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenanceEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EdgecontainerClusterMaintenanceEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents">EdgecontainerClusterMaintenanceEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterMaintenanceEvents
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenanceEvents">EdgecontainerClusterMaintenanceEvents</a>

---


### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get"></a>

```go
func Get(index *f64) EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow"></a>

```go
func PutWindow(value EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow"></a>

```go
func ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window"></a>

```go
func Window() EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput"></a>

```go
func WindowInput() EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---


### EdgecontainerClusterMaintenancePolicyOutputReference <a name="EdgecontainerClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions">PutMaintenanceExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions">ResetMaintenanceExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceExclusions` <a name="PutMaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions"></a>

```go
func PutMaintenanceExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow"></a>

```go
func PutWindow(value EdgecontainerClusterMaintenancePolicyWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `ResetMaintenanceExclusions` <a name="ResetMaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions"></a>

```go
func ResetMaintenanceExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions">MaintenanceExclusions</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput">MaintenanceExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceExclusions`<sup>Required</sup> <a name="MaintenanceExclusions" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions"></a>

```go
func MaintenanceExclusions() EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.window"></a>

```go
func Window() EdgecontainerClusterMaintenancePolicyWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowOutputReference</a>

---

##### `MaintenanceExclusionsInput`<sup>Optional</sup> <a name="MaintenanceExclusionsInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput"></a>

```go
func MaintenanceExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput"></a>

```go
func WindowInput() EdgecontainerClusterMaintenancePolicyWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicy">EdgecontainerClusterMaintenancePolicy</a>

---


### EdgecontainerClusterMaintenancePolicyWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterMaintenancePolicyWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow">PutRecurringWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurringWindow` <a name="PutRecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow"></a>

```go
func PutRecurringWindow(value EdgecontainerClusterMaintenancePolicyWindowRecurringWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow">RecurringWindow</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput">RecurringWindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecurringWindow`<sup>Required</sup> <a name="RecurringWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow"></a>

```go
func RecurringWindow() EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a>

---

##### `RecurringWindowInput`<sup>Optional</sup> <a name="RecurringWindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput"></a>

```go
func RecurringWindowInput() EdgecontainerClusterMaintenancePolicyWindowRecurringWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterMaintenancePolicyWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindow">EdgecontainerClusterMaintenancePolicyWindow</a>

---


### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow"></a>

```go
func PutWindow(value EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence"></a>

```go
func ResetRecurrence()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow"></a>

```go
func ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window"></a>

```go
func Window() EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput"></a>

```go
func RecurrenceInput() *string
```

- *Type:* *string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput"></a>

```go
func WindowInput() EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence"></a>

```go
func Recurrence() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterMaintenancePolicyWindowRecurringWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


### EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference <a name="EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---


### EdgecontainerClusterNetworkingOutputReference <a name="EdgecontainerClusterNetworkingOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterNetworkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterNetworkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks">ResetClusterIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks">ResetServicesIpv6CidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIpv6CidrBlocks` <a name="ResetClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks"></a>

```go
func ResetClusterIpv6CidrBlocks()
```

##### `ResetServicesIpv6CidrBlocks` <a name="ResetServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks"></a>

```go
func ResetServicesIpv6CidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput">ClusterIpv4CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput">ClusterIpv6CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput">ServicesIpv4CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput">ServicesIpv6CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks">ClusterIpv4CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks">ClusterIpv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks">ServicesIpv4CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks">ServicesIpv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `ClusterIpv4CidrBlocksInput`<sup>Optional</sup> <a name="ClusterIpv4CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput"></a>

```go
func ClusterIpv4CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterIpv6CidrBlocksInput`<sup>Optional</sup> <a name="ClusterIpv6CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput"></a>

```go
func ClusterIpv6CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesIpv4CidrBlocksInput`<sup>Optional</sup> <a name="ServicesIpv4CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput"></a>

```go
func ServicesIpv4CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesIpv6CidrBlocksInput`<sup>Optional</sup> <a name="ServicesIpv6CidrBlocksInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput"></a>

```go
func ServicesIpv6CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterIpv4CidrBlocks`<sup>Required</sup> <a name="ClusterIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks"></a>

```go
func ClusterIpv4CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterIpv6CidrBlocks`<sup>Required</sup> <a name="ClusterIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks"></a>

```go
func ClusterIpv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesIpv4CidrBlocks`<sup>Required</sup> <a name="ServicesIpv4CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks"></a>

```go
func ServicesIpv4CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesIpv6CidrBlocks`<sup>Required</sup> <a name="ServicesIpv6CidrBlocks" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks"></a>

```go
func ServicesIpv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworkingOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterNetworking">EdgecontainerClusterNetworking</a>

---


### EdgecontainerClusterSystemAddonsConfigIngressOutputReference <a name="EdgecontainerClusterSystemAddonsConfigIngressOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterSystemAddonsConfigIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterSystemAddonsConfigIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip">ResetIpv4Vip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetIpv4Vip` <a name="ResetIpv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip"></a>

```go
func ResetIpv4Vip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput">Ipv4VipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip">Ipv4Vip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv4VipInput`<sup>Optional</sup> <a name="Ipv4VipInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput"></a>

```go
func Ipv4VipInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Ipv4Vip`<sup>Required</sup> <a name="Ipv4Vip" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip"></a>

```go
func Ipv4Vip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterSystemAddonsConfigIngress
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---


### EdgecontainerClusterSystemAddonsConfigOutputReference <a name="EdgecontainerClusterSystemAddonsConfigOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterSystemAddonsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterSystemAddonsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress">ResetIngress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress"></a>

```go
func PutIngress(value EdgecontainerClusterSystemAddonsConfigIngress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress"></a>

```go
func ResetIngress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference">EdgecontainerClusterSystemAddonsConfigIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput">IngressInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress"></a>

```go
func Ingress() EdgecontainerClusterSystemAddonsConfigIngressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngressOutputReference">EdgecontainerClusterSystemAddonsConfigIngressOutputReference</a>

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput"></a>

```go
func IngressInput() EdgecontainerClusterSystemAddonsConfigIngress
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigIngress">EdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerClusterSystemAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterSystemAddonsConfig">EdgecontainerClusterSystemAddonsConfig</a>

---


### EdgecontainerClusterTimeoutsOutputReference <a name="EdgecontainerClusterTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainercluster"

edgecontainercluster.NewEdgecontainerClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerCluster.EdgecontainerClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




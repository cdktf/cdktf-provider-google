# `networkSecurityMirroringEndpointGroupAssociation` Submodule <a name="`networkSecurityMirroringEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringEndpointGroupAssociation <a name="NetworkSecurityMirroringEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association google_network_security_mirroring_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NewNetworkSecurityMirroringEndpointGroupAssociation(scope Construct, id *string, config NetworkSecurityMirroringEndpointGroupAssociationConfig) NetworkSecurityMirroringEndpointGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig">NetworkSecurityMirroringEndpointGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig">NetworkSecurityMirroringEndpointGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId">ResetMirroringEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityMirroringEndpointGroupAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMirroringEndpointGroupAssociationId` <a name="ResetMirroringEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId"></a>

```go
func ResetMirroringEndpointGroupAssociationId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityMirroringEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityMirroringEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails">LocationsDetails</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput">MirroringEndpointGroupAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput">MirroringEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId">MirroringEndpointGroupAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locations"></a>

```go
func Locations() NetworkSecurityMirroringEndpointGroupAssociationLocationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsList</a>

---

##### `LocationsDetails`<sup>Required</sup> <a name="LocationsDetails" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails"></a>

```go
func LocationsDetails() NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="MirroringEndpointGroupAssociationIdInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput"></a>

```go
func MirroringEndpointGroupAssociationIdInput() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupInput`<sup>Optional</sup> <a name="MirroringEndpointGroupInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput"></a>

```go
func MirroringEndpointGroupInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup"></a>

```go
func MirroringEndpointGroup() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupAssociationId`<sup>Required</sup> <a name="MirroringEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId"></a>

```go
func MirroringEndpointGroupAssociationId() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringEndpointGroupAssociationConfig <a name="NetworkSecurityMirroringEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

&networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MirroringEndpointGroup: *string,
	Network: *string,
	Id: *string,
	Labels: *map[string]*string,
	MirroringEndpointGroupAssociationId: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.network">Network</a></code> | <code>*string</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId">MirroringEndpointGroupAssociationId</a></code> | <code>*string</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#location NetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup"></a>

```go
MirroringEndpointGroup *string
```

- *Type:* *string

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#network NetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#id NetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#labels NetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `MirroringEndpointGroupAssociationId`<sup>Optional</sup> <a name="MirroringEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId"></a>

```go
MirroringEndpointGroupAssociationId *string
```

- *Type:* *string

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id NetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#project NetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityMirroringEndpointGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts">NetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#timeouts NetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

### NetworkSecurityMirroringEndpointGroupAssociationLocations <a name="NetworkSecurityMirroringEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

&networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociationLocations {

}
```


### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

&networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails {

}
```


### NetworkSecurityMirroringEndpointGroupAssociationTimeouts <a name="NetworkSecurityMirroringEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

&networksecuritymirroringendpointgroupassociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#create NetworkSecurityMirroringEndpointGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#delete NetworkSecurityMirroringEndpointGroupAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_mirroring_endpoint_group_association#update NetworkSecurityMirroringEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NewNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get"></a>

```go
func Get(index *f64) NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NewNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">NetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsList <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NewNetworkSecurityMirroringEndpointGroupAssociationLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityMirroringEndpointGroupAssociationLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get"></a>

```go
func Get(index *f64) NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NewNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations">NetworkSecurityMirroringEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityMirroringEndpointGroupAssociationLocations
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationLocations">NetworkSecurityMirroringEndpointGroupAssociationLocations</a>

---


### NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritymirroringendpointgroupassociation"

networksecuritymirroringendpointgroupassociation.NewNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroupAssociation.NetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




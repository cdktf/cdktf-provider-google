# `networkSecurityFirewallEndpointAssociation` Submodule <a name="`networkSecurityFirewallEndpointAssociation` Submodule" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpointAssociation <a name="NetworkSecurityFirewallEndpointAssociation" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association google_network_security_firewall_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

networksecurityfirewallendpointassociation.NewNetworkSecurityFirewallEndpointAssociation(scope Construct, id *string, config NetworkSecurityFirewallEndpointAssociationConfig) NetworkSecurityFirewallEndpointAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig">NetworkSecurityFirewallEndpointAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig">NetworkSecurityFirewallEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy">ResetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityFirewallEndpointAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsInspectionPolicy` <a name="ResetTlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy"></a>

```go
func ResetTlsInspectionPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

networksecurityfirewallendpointassociation.NetworkSecurityFirewallEndpointAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

networksecurityfirewallendpointassociation.NetworkSecurityFirewallEndpointAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

networksecurityfirewallendpointassociation.NetworkSecurityFirewallEndpointAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

networksecurityfirewallendpointassociation.NetworkSecurityFirewallEndpointAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityFirewallEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityFirewallEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput">FirewallEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput">TlsInspectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint">FirewallEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy">TlsInspectionPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallEndpointInput`<sup>Optional</sup> <a name="FirewallEndpointInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput"></a>

```go
func FirewallEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInspectionPolicyInput`<sup>Optional</sup> <a name="TlsInspectionPolicyInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput"></a>

```go
func TlsInspectionPolicyInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `FirewallEndpoint`<sup>Required</sup> <a name="FirewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint"></a>

```go
func FirewallEndpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TlsInspectionPolicy`<sup>Required</sup> <a name="TlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy"></a>

```go
func TlsInspectionPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointAssociationConfig <a name="NetworkSecurityFirewallEndpointAssociationConfig" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

&networksecurityfirewallendpointassociation.NetworkSecurityFirewallEndpointAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallEndpoint: *string,
	Location: *string,
	Name: *string,
	Network: *string,
	Disabled: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Parent: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts,
	TlsInspectionPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint">FirewallEndpoint</a></code> | <code>*string</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location">Location</a></code> | <code>*string</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network">Network</a></code> | <code>*string</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent">Parent</a></code> | <code>*string</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy">TlsInspectionPolicy</a></code> | <code>*string</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallEndpoint`<sup>Required</sup> <a name="FirewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint"></a>

```go
FirewallEndpoint *string
```

- *Type:* *string

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#firewall_endpoint NetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#location NetworkSecurityFirewallEndpointAssociation#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#name NetworkSecurityFirewallEndpointAssociation#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#network NetworkSecurityFirewallEndpointAssociation#network}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#disabled NetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#labels NetworkSecurityFirewallEndpointAssociation#labels}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#parent NetworkSecurityFirewallEndpointAssociation#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityFirewallEndpointAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#timeouts NetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `TlsInspectionPolicy`<sup>Optional</sup> <a name="TlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy"></a>

```go
TlsInspectionPolicy *string
```

- *Type:* *string

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#tls_inspection_policy NetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

### NetworkSecurityFirewallEndpointAssociationTimeouts <a name="NetworkSecurityFirewallEndpointAssociationTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

&networksecurityfirewallendpointassociation.NetworkSecurityFirewallEndpointAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networksecurityfirewallendpointassociation"

networksecurityfirewallendpointassociation.NewNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




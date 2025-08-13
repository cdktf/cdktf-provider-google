# `networkSecuritySecurityProfileGroup` Submodule <a name="`networkSecuritySecurityProfileGroup` Submodule" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfileGroup <a name="NetworkSecuritySecurityProfileGroup" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group google_network_security_security_profile_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

networksecuritysecurityprofilegroup.NewNetworkSecuritySecurityProfileGroup(scope Construct, id *string, config NetworkSecuritySecurityProfileGroupConfig) NetworkSecuritySecurityProfileGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig">NetworkSecuritySecurityProfileGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecuritySecurityProfileGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>

---

##### `ResetCustomInterceptProfile` <a name="ResetCustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetCustomInterceptProfile"></a>

```go
func ResetCustomInterceptProfile()
```

##### `ResetCustomMirroringProfile` <a name="ResetCustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetCustomMirroringProfile"></a>

```go
func ResetCustomMirroringProfile()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetParent"></a>

```go
func ResetParent()
```

##### `ResetThreatPreventionProfile` <a name="ResetThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetThreatPreventionProfile"></a>

```go
func ResetThreatPreventionProfile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
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

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

networksecuritysecurityprofilegroup.NetworkSecuritySecurityProfileGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

networksecuritysecurityprofilegroup.NetworkSecuritySecurityProfileGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

networksecuritysecurityprofilegroup.NetworkSecuritySecurityProfileGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

networksecuritysecurityprofilegroup.NetworkSecuritySecurityProfileGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecuritySecurityProfileGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecuritySecurityProfileGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecuritySecurityProfileGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfileGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference">NetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfileInput">CustomInterceptProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfileInput">CustomMirroringProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput">ThreatPreventionProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfile">CustomInterceptProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfile">CustomMirroringProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfile">ThreatPreventionProfile</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeouts"></a>

```go
func Timeouts() NetworkSecuritySecurityProfileGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference">NetworkSecuritySecurityProfileGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomInterceptProfileInput`<sup>Optional</sup> <a name="CustomInterceptProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfileInput"></a>

```go
func CustomInterceptProfileInput() *string
```

- *Type:* *string

---

##### `CustomMirroringProfileInput`<sup>Optional</sup> <a name="CustomMirroringProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfileInput"></a>

```go
func CustomMirroringProfileInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ThreatPreventionProfileInput`<sup>Optional</sup> <a name="ThreatPreventionProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfileInput"></a>

```go
func ThreatPreventionProfileInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomInterceptProfile`<sup>Required</sup> <a name="CustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customInterceptProfile"></a>

```go
func CustomInterceptProfile() *string
```

- *Type:* *string

---

##### `CustomMirroringProfile`<sup>Required</sup> <a name="CustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.customMirroringProfile"></a>

```go
func CustomMirroringProfile() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ThreatPreventionProfile`<sup>Required</sup> <a name="ThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.threatPreventionProfile"></a>

```go
func ThreatPreventionProfile() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileGroupConfig <a name="NetworkSecuritySecurityProfileGroupConfig" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

&networksecuritysecurityprofilegroup.NetworkSecuritySecurityProfileGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CustomInterceptProfile: *string,
	CustomMirroringProfile: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Parent: *string,
	ThreatPreventionProfile: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the security profile group resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customInterceptProfile">CustomInterceptProfile</a></code> | <code>*string</code> | Reference to a SecurityProfile with the CustomIntercept configuration. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customMirroringProfile">CustomMirroringProfile</a></code> | <code>*string</code> | Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.location">Location</a></code> | <code>*string</code> | The location of the security profile group. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.parent">Parent</a></code> | <code>*string</code> | The name of the parent this security profile group belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile">ThreatPreventionProfile</a></code> | <code>*string</code> | Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the security profile group resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#name NetworkSecuritySecurityProfileGroup#name}

---

##### `CustomInterceptProfile`<sup>Optional</sup> <a name="CustomInterceptProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customInterceptProfile"></a>

```go
CustomInterceptProfile *string
```

- *Type:* *string

Reference to a SecurityProfile with the CustomIntercept configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#custom_intercept_profile NetworkSecuritySecurityProfileGroup#custom_intercept_profile}

---

##### `CustomMirroringProfile`<sup>Optional</sup> <a name="CustomMirroringProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.customMirroringProfile"></a>

```go
CustomMirroringProfile *string
```

- *Type:* *string

Reference to a SecurityProfile with the custom mirroring configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#custom_mirroring_profile NetworkSecuritySecurityProfileGroup#custom_mirroring_profile}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#description NetworkSecuritySecurityProfileGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#id NetworkSecuritySecurityProfileGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#labels NetworkSecuritySecurityProfileGroup#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the security profile group. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#location NetworkSecuritySecurityProfileGroup#location}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The name of the parent this security profile group belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#parent NetworkSecuritySecurityProfileGroup#parent}

---

##### `ThreatPreventionProfile`<sup>Optional</sup> <a name="ThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.threatPreventionProfile"></a>

```go
ThreatPreventionProfile *string
```

- *Type:* *string

Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#threat_prevention_profile NetworkSecuritySecurityProfileGroup#threat_prevention_profile}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupConfig.property.timeouts"></a>

```go
Timeouts NetworkSecuritySecurityProfileGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts">NetworkSecuritySecurityProfileGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#timeouts NetworkSecuritySecurityProfileGroup#timeouts}

---

### NetworkSecuritySecurityProfileGroupTimeouts <a name="NetworkSecuritySecurityProfileGroupTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

&networksecuritysecurityprofilegroup.NetworkSecuritySecurityProfileGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#create NetworkSecuritySecurityProfileGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#delete NetworkSecuritySecurityProfileGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_security_profile_group#update NetworkSecuritySecurityProfileGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileGroupTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecuritysecurityprofilegroup"

networksecuritysecurityprofilegroup.NewNetworkSecuritySecurityProfileGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecuritySecurityProfileGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecuritySecurityProfileGroup.NetworkSecuritySecurityProfileGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




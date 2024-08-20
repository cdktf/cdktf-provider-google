# `serviceNetworkingVpcServiceControls` Submodule <a name="`serviceNetworkingVpcServiceControls` Submodule" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingVpcServiceControls <a name="ServiceNetworkingVpcServiceControls" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls google_service_networking_vpc_service_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

servicenetworkingvpcservicecontrols.NewServiceNetworkingVpcServiceControls(scope Construct, id *string, config ServiceNetworkingVpcServiceControlsConfig) ServiceNetworkingVpcServiceControls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig">ServiceNetworkingVpcServiceControlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig">ServiceNetworkingVpcServiceControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts"></a>

```go
func PutTimeouts(value ServiceNetworkingVpcServiceControlsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

servicenetworkingvpcservicecontrols.ServiceNetworkingVpcServiceControls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

servicenetworkingvpcservicecontrols.ServiceNetworkingVpcServiceControls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

servicenetworkingvpcservicecontrols.ServiceNetworkingVpcServiceControls_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

servicenetworkingvpcservicecontrols.ServiceNetworkingVpcServiceControls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceNetworkingVpcServiceControls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceNetworkingVpcServiceControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceNetworkingVpcServiceControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts"></a>

```go
func Timeouts() ServiceNetworkingVpcServiceControlsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingVpcServiceControlsConfig <a name="ServiceNetworkingVpcServiceControlsConfig" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

&servicenetworkingvpcservicecontrols.ServiceNetworkingVpcServiceControlsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Network: *string,
	Service: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network">Network</a></code> | <code>*string</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service">Service</a></code> | <code>*string</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project">Project</a></code> | <code>*string</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#enabled ServiceNetworkingVpcServiceControls#enabled}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#network ServiceNetworkingVpcServiceControls#network}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#service ServiceNetworkingVpcServiceControls#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#project ServiceNetworkingVpcServiceControls#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts"></a>

```go
Timeouts ServiceNetworkingVpcServiceControlsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#timeouts ServiceNetworkingVpcServiceControls#timeouts}

---

### ServiceNetworkingVpcServiceControlsTimeouts <a name="ServiceNetworkingVpcServiceControlsTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

&servicenetworkingvpcservicecontrols.ServiceNetworkingVpcServiceControlsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingVpcServiceControlsTimeoutsOutputReference <a name="ServiceNetworkingVpcServiceControlsTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/servicenetworkingvpcservicecontrols"

servicenetworkingvpcservicecontrols.NewServiceNetworkingVpcServiceControlsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceNetworkingVpcServiceControlsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




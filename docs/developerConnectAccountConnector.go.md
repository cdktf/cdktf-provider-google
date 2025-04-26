# `developerConnectAccountConnector` Submodule <a name="`developerConnectAccountConnector` Submodule" id="@cdktf/provider-google.developerConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectAccountConnector <a name="DeveloperConnectAccountConnector" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.NewDeveloperConnectAccountConnector(scope Construct, id *string, config DeveloperConnectAccountConnectorConfig) DeveloperConnectAccountConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig">DeveloperConnectAccountConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig">DeveloperConnectAccountConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig">PutProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig">ResetProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderOauthConfig` <a name="PutProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```go
func PutProviderOauthConfig(value DeveloperConnectAccountConnectorProviderOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts"></a>

```go
func PutTimeouts(value DeveloperConnectAccountConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProviderOauthConfig` <a name="ResetProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```go
func ResetProviderOauthConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DeveloperConnectAccountConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.DeveloperConnectAccountConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.DeveloperConnectAccountConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.DeveloperConnectAccountConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.DeveloperConnectAccountConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DeveloperConnectAccountConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DeveloperConnectAccountConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri">OauthStartUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig">ProviderOauthConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput">AccountConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput">ProviderOauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId">AccountConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthStartUri`<sup>Required</sup> <a name="OauthStartUri" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri"></a>

```go
func OauthStartUri() *string
```

- *Type:* *string

---

##### `ProviderOauthConfig`<sup>Required</sup> <a name="ProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```go
func ProviderOauthConfig() DeveloperConnectAccountConnectorProviderOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts"></a>

```go
func Timeouts() DeveloperConnectAccountConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccountConnectorIdInput`<sup>Optional</sup> <a name="AccountConnectorIdInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```go
func AccountConnectorIdInput() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProviderOauthConfigInput`<sup>Optional</sup> <a name="ProviderOauthConfigInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```go
func ProviderOauthConfigInput() DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountConnectorId`<sup>Required</sup> <a name="AccountConnectorId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId"></a>

```go
func AccountConnectorId() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectAccountConnectorConfig <a name="DeveloperConnectAccountConnectorConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

&developerconnectaccountconnector.DeveloperConnectAccountConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountConnectorId: *string,
	Location: *string,
	Annotations: *map[string]*string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	ProviderOauthConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId">AccountConnectorId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig">ProviderOauthConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountConnectorId`<sup>Required</sup> <a name="AccountConnectorId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```go
AccountConnectorId *string
```

- *Type:* *string

Required.

The ID to use for the AccountConnector, which will become the final
component of the AccountConnector's resource name. Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `ProviderOauthConfig`<sup>Optional</sup> <a name="ProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```go
ProviderOauthConfig DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```go
Timeouts DeveloperConnectAccountConnectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

### DeveloperConnectAccountConnectorProviderOauthConfig <a name="DeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

&developerconnectaccountconnector.DeveloperConnectAccountConnectorProviderOauthConfig {
	Scopes: *[]*string,
	SystemProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">SystemProviderId</a></code> | <code>*string</code> | List of providers that are owned by Developer Connect. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Required.

User selected scopes to apply to the Oauth config
In the event of changing scopes, user records under AccountConnector will
be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

##### `SystemProviderId`<sup>Optional</sup> <a name="SystemProviderId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```go
SystemProviderId *string
```

- *Type:* *string

List of providers that are owned by Developer Connect.

Possible values:
GITHUB
GITLAB
GOOGLE
SENTRY
ROVO

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}

---

### DeveloperConnectAccountConnectorTimeouts <a name="DeveloperConnectAccountConnectorTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

&developerconnectaccountconnector.DeveloperConnectAccountConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="DeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.NewDeveloperConnectAccountConnectorProviderOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeveloperConnectAccountConnectorProviderOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">ResetSystemProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemProviderId` <a name="ResetSystemProviderId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```go
func ResetSystemProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">SystemProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">SystemProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SystemProviderIdInput`<sup>Optional</sup> <a name="SystemProviderIdInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```go
func SystemProviderIdInput() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SystemProviderId`<sup>Required</sup> <a name="SystemProviderId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```go
func SystemProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### DeveloperConnectAccountConnectorTimeoutsOutputReference <a name="DeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/developerconnectaccountconnector"

developerconnectaccountconnector.NewDeveloperConnectAccountConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeveloperConnectAccountConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




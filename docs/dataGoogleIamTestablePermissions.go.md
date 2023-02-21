# `dataGoogleIamTestablePermissions` Submodule <a name="`dataGoogleIamTestablePermissions` Submodule" id="@cdktf/provider-google.dataGoogleIamTestablePermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamTestablePermissions <a name="DataGoogleIamTestablePermissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions google_iam_testable_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

datagoogleiamtestablepermissions.NewDataGoogleIamTestablePermissions(scope Construct, id *string, config DataGoogleIamTestablePermissionsConfig) DataGoogleIamTestablePermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig">DataGoogleIamTestablePermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig">DataGoogleIamTestablePermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetCustomSupportLevel">ResetCustomSupportLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCustomSupportLevel` <a name="ResetCustomSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetCustomSupportLevel"></a>

```go
func ResetCustomSupportLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetId"></a>

```go
func ResetId()
```

##### `ResetStages` <a name="ResetStages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.resetStages"></a>

```go
func ResetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

datagoogleiamtestablepermissions.DataGoogleIamTestablePermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

datagoogleiamtestablepermissions.DataGoogleIamTestablePermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

datagoogleiamtestablepermissions.DataGoogleIamTestablePermissions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList">DataGoogleIamTestablePermissionsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevelInput">CustomSupportLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceNameInput">FullResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stagesInput">StagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevel">CustomSupportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceName">FullResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stages">Stages</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.permissions"></a>

```go
func Permissions() DataGoogleIamTestablePermissionsPermissionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList">DataGoogleIamTestablePermissionsPermissionsList</a>

---

##### `CustomSupportLevelInput`<sup>Optional</sup> <a name="CustomSupportLevelInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevelInput"></a>

```go
func CustomSupportLevelInput() *string
```

- *Type:* *string

---

##### `FullResourceNameInput`<sup>Optional</sup> <a name="FullResourceNameInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceNameInput"></a>

```go
func FullResourceNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stagesInput"></a>

```go
func StagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomSupportLevel`<sup>Required</sup> <a name="CustomSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.customSupportLevel"></a>

```go
func CustomSupportLevel() *string
```

- *Type:* *string

---

##### `FullResourceName`<sup>Required</sup> <a name="FullResourceName" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.fullResourceName"></a>

```go
func FullResourceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.stages"></a>

```go
func Stages() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamTestablePermissionsConfig <a name="DataGoogleIamTestablePermissionsConfig" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

&datagoogleiamtestablepermissions.DataGoogleIamTestablePermissionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FullResourceName: *string,
	CustomSupportLevel: *string,
	Id: *string,
	Stages: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.fullResourceName">FullResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.customSupportLevel">CustomSupportLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.stages">Stages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullResourceName`<sup>Required</sup> <a name="FullResourceName" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.fullResourceName"></a>

```go
FullResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#full_resource_name DataGoogleIamTestablePermissions#full_resource_name}.

---

##### `CustomSupportLevel`<sup>Optional</sup> <a name="CustomSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.customSupportLevel"></a>

```go
CustomSupportLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#custom_support_level DataGoogleIamTestablePermissions#custom_support_level}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#id DataGoogleIamTestablePermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsConfig.property.stages"></a>

```go
Stages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_testable_permissions#stages DataGoogleIamTestablePermissions#stages}.

---

### DataGoogleIamTestablePermissionsPermissions <a name="DataGoogleIamTestablePermissionsPermissions" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

&datagoogleiamtestablepermissions.DataGoogleIamTestablePermissionsPermissions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamTestablePermissionsPermissionsList <a name="DataGoogleIamTestablePermissionsPermissionsList" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

datagoogleiamtestablepermissions.NewDataGoogleIamTestablePermissionsPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamTestablePermissionsPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get"></a>

```go
func Get(index *f64) DataGoogleIamTestablePermissionsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamTestablePermissionsPermissionsOutputReference <a name="DataGoogleIamTestablePermissionsPermissionsOutputReference" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamtestablepermissions"

datagoogleiamtestablepermissions.NewDataGoogleIamTestablePermissionsPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamTestablePermissionsPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.apiDisabled">ApiDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.customSupportLevel">CustomSupportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions">DataGoogleIamTestablePermissionsPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiDisabled`<sup>Required</sup> <a name="ApiDisabled" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.apiDisabled"></a>

```go
func ApiDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CustomSupportLevel`<sup>Required</sup> <a name="CustomSupportLevel" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.customSupportLevel"></a>

```go
func CustomSupportLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamTestablePermissionsPermissions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamTestablePermissions.DataGoogleIamTestablePermissionsPermissions">DataGoogleIamTestablePermissionsPermissions</a>

---




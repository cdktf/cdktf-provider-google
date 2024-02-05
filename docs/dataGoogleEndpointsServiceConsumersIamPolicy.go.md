# `dataGoogleEndpointsServiceConsumersIamPolicy` Submodule <a name="`dataGoogleEndpointsServiceConsumersIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicy <a name="DataGoogleEndpointsServiceConsumersIamPolicy" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy google_endpoints_service_consumers_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleendpointsserviceconsumersiampolicy"

datagoogleendpointsserviceconsumersiampolicy.NewDataGoogleEndpointsServiceConsumersIamPolicy(scope Construct, id *string, config DataGoogleEndpointsServiceConsumersIamPolicyConfig) DataGoogleEndpointsServiceConsumersIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig">DataGoogleEndpointsServiceConsumersIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig">DataGoogleEndpointsServiceConsumersIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleEndpointsServiceConsumersIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleendpointsserviceconsumersiampolicy"

datagoogleendpointsserviceconsumersiampolicy.DataGoogleEndpointsServiceConsumersIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleendpointsserviceconsumersiampolicy"

datagoogleendpointsserviceconsumersiampolicy.DataGoogleEndpointsServiceConsumersIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleendpointsserviceconsumersiampolicy"

datagoogleendpointsserviceconsumersiampolicy.DataGoogleEndpointsServiceConsumersIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleendpointsserviceconsumersiampolicy"

datagoogleendpointsserviceconsumersiampolicy.DataGoogleEndpointsServiceConsumersIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleEndpointsServiceConsumersIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleEndpointsServiceConsumersIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleEndpointsServiceConsumersIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleEndpointsServiceConsumersIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput">ConsumerProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject">ConsumerProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `ConsumerProjectInput`<sup>Optional</sup> <a name="ConsumerProjectInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput"></a>

```go
func ConsumerProjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject"></a>

```go
func ConsumerProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicyConfig <a name="DataGoogleEndpointsServiceConsumersIamPolicyConfig" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleendpointsserviceconsumersiampolicy"

&datagoogleendpointsserviceconsumersiampolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsumerProject: *string,
	ServiceName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject">ConsumerProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject"></a>

```go
ConsumerProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




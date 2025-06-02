# `dataGoogleCloudRunV2WorkerPoolIamPolicy` Submodule <a name="`dataGoogleCloudRunV2WorkerPoolIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunV2WorkerPoolIamPolicy <a name="DataGoogleCloudRunV2WorkerPoolIamPolicy" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy google_cloud_run_v2_worker_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecloudrunv2workerpooliampolicy"

datagooglecloudrunv2workerpooliampolicy.NewDataGoogleCloudRunV2WorkerPoolIamPolicy(scope Construct, id *string, config DataGoogleCloudRunV2WorkerPoolIamPolicyConfig) DataGoogleCloudRunV2WorkerPoolIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig">DataGoogleCloudRunV2WorkerPoolIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig">DataGoogleCloudRunV2WorkerPoolIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudRunV2WorkerPoolIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecloudrunv2workerpooliampolicy"

datagooglecloudrunv2workerpooliampolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecloudrunv2workerpooliampolicy"

datagooglecloudrunv2workerpooliampolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecloudrunv2workerpooliampolicy"

datagooglecloudrunv2workerpooliampolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecloudrunv2workerpooliampolicy"

datagooglecloudrunv2workerpooliampolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleCloudRunV2WorkerPoolIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCloudRunV2WorkerPoolIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCloudRunV2WorkerPoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudRunV2WorkerPoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunV2WorkerPoolIamPolicyConfig <a name="DataGoogleCloudRunV2WorkerPoolIamPolicyConfig" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/datagooglecloudrunv2workerpooliampolicy"

&datagooglecloudrunv2workerpooliampolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#name DataGoogleCloudRunV2WorkerPoolIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#id DataGoogleCloudRunV2WorkerPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#location DataGoogleCloudRunV2WorkerPoolIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudRunV2WorkerPoolIamPolicy.DataGoogleCloudRunV2WorkerPoolIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/cloud_run_v2_worker_pool_iam_policy#project DataGoogleCloudRunV2WorkerPoolIamPolicy#project}.

---




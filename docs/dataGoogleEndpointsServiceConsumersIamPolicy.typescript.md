# `data_google_endpoints_service_consumers_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_endpoints_service_consumers_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy).

# `dataGoogleEndpointsServiceConsumersIamPolicy` Submodule <a name="`dataGoogleEndpointsServiceConsumersIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicy <a name="DataGoogleEndpointsServiceConsumersIamPolicy" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy google_endpoints_service_consumers_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer"></a>

```typescript
import { dataGoogleEndpointsServiceConsumersIamPolicy } from '@cdktf/provider-google'

new dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy(scope: Construct, id: string, config: DataGoogleEndpointsServiceConsumersIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig">DataGoogleEndpointsServiceConsumersIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig">DataGoogleEndpointsServiceConsumersIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleEndpointsServiceConsumersIamPolicy } from '@cdktf/provider-google'

dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleEndpointsServiceConsumersIamPolicy } from '@cdktf/provider-google'

dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleEndpointsServiceConsumersIamPolicy } from '@cdktf/provider-google'

dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput">consumerProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject">consumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `consumerProjectInput`<sup>Optional</sup> <a name="consumerProjectInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput"></a>

```typescript
public readonly consumerProjectInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicyConfig <a name="DataGoogleEndpointsServiceConsumersIamPolicyConfig" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleEndpointsServiceConsumersIamPolicy } from '@cdktf/provider-google'

const dataGoogleEndpointsServiceConsumersIamPolicyConfig: dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject">consumerProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




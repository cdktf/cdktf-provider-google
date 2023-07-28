# `google_notebooks_runtime_iam_policy`

Refer to the Terraform Registory for docs: [`google_notebooks_runtime_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy).

# `notebooksRuntimeIamPolicy` Submodule <a name="`notebooksRuntimeIamPolicy` Submodule" id="@cdktf/provider-google.notebooksRuntimeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksRuntimeIamPolicy <a name="NotebooksRuntimeIamPolicy" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy google_notebooks_runtime_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer"></a>

```typescript
import { notebooksRuntimeIamPolicy } from '@cdktf/provider-google'

new notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy(scope: Construct, id: string, config: NotebooksRuntimeIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig">NotebooksRuntimeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig">NotebooksRuntimeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct"></a>

```typescript
import { notebooksRuntimeIamPolicy } from '@cdktf/provider-google'

notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement"></a>

```typescript
import { notebooksRuntimeIamPolicy } from '@cdktf/provider-google'

notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource"></a>

```typescript
import { notebooksRuntimeIamPolicy } from '@cdktf/provider-google'

notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeNameInput">runtimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeName">runtimeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeNameInput`<sup>Optional</sup> <a name="runtimeNameInput" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeNameInput"></a>

```typescript
public readonly runtimeNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksRuntimeIamPolicyConfig <a name="NotebooksRuntimeIamPolicyConfig" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.Initializer"></a>

```typescript
import { notebooksRuntimeIamPolicy } from '@cdktf/provider-google'

const notebooksRuntimeIamPolicyConfig: notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#policy_data NotebooksRuntimeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.runtimeName">runtimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#runtime_name NotebooksRuntimeIamPolicy#runtime_name}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#id NotebooksRuntimeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#location NotebooksRuntimeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#project NotebooksRuntimeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#policy_data NotebooksRuntimeIamPolicy#policy_data}.

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#runtime_name NotebooksRuntimeIamPolicy#runtime_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#id NotebooksRuntimeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#location NotebooksRuntimeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksRuntimeIamPolicy.NotebooksRuntimeIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/notebooks_runtime_iam_policy#project NotebooksRuntimeIamPolicy#project}.

---




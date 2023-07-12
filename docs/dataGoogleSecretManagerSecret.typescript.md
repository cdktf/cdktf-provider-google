# `data_google_secret_manager_secret`

Refer to the Terraform Registory for docs: [`data_google_secret_manager_secret`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret).

# `dataGoogleSecretManagerSecret` Submodule <a name="`dataGoogleSecretManagerSecret` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecret <a name="DataGoogleSecretManagerSecret" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret(scope: Construct, id: string, config: DataGoogleSecretManagerSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig">DataGoogleSecretManagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig">DataGoogleSecretManagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList">DataGoogleSecretManagerSecretReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList">DataGoogleSecretManagerSecretRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList">DataGoogleSecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.replication"></a>

```typescript
public readonly replication: DataGoogleSecretManagerSecretReplicationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList">DataGoogleSecretManagerSecretReplicationList</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.rotation"></a>

```typescript
public readonly rotation: DataGoogleSecretManagerSecretRotationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList">DataGoogleSecretManagerSecretRotationList</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.topics"></a>

```typescript
public readonly topics: DataGoogleSecretManagerSecretTopicsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList">DataGoogleSecretManagerSecretTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretConfig <a name="DataGoogleSecretManagerSecretConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretConfig: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret#id DataGoogleSecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret#project DataGoogleSecretManagerSecret#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret#secret_id DataGoogleSecretManagerSecret#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret#id DataGoogleSecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/secret_manager_secret#project DataGoogleSecretManagerSecret#project}.

---

### DataGoogleSecretManagerSecretReplication <a name="DataGoogleSecretManagerSecretReplication" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretReplication: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication = { ... }
```


### DataGoogleSecretManagerSecretReplicationUserManaged <a name="DataGoogleSecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretReplicationUserManaged: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged = { ... }
```


### DataGoogleSecretManagerSecretReplicationUserManagedReplicas <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretReplicationUserManagedReplicas: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas = { ... }
```


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption = { ... }
```


### DataGoogleSecretManagerSecretRotation <a name="DataGoogleSecretManagerSecretRotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretRotation: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation = { ... }
```


### DataGoogleSecretManagerSecretTopics <a name="DataGoogleSecretManagerSecretTopics" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

const dataGoogleSecretManagerSecretTopics: dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerSecretReplicationList <a name="DataGoogleSecretManagerSecretReplicationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationOutputReference <a name="DataGoogleSecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.automatic">automatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.userManaged">userManaged</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList">DataGoogleSecretManagerSecretReplicationUserManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication">DataGoogleSecretManagerSecretReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.automatic"></a>

```typescript
public readonly automatic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `userManaged`<sup>Required</sup> <a name="userManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```typescript
public readonly userManaged: DataGoogleSecretManagerSecretReplicationUserManagedList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList">DataGoogleSecretManagerSecretReplicationUserManagedList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretReplication;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication">DataGoogleSecretManagerSecretReplication</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedList <a name="DataGoogleSecretManagerSecretReplicationUserManagedList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretReplicationUserManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationUserManagedOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged">DataGoogleSecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```typescript
public readonly replicas: DataGoogleSecretManagerSecretReplicationUserManagedReplicasList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretReplicationUserManaged;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged">DataGoogleSecretManagerSecretReplicationUserManaged</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasList <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas">DataGoogleSecretManagerSecretReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretReplicationUserManagedReplicas;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas">DataGoogleSecretManagerSecretReplicationUserManagedReplicas</a>

---


### DataGoogleSecretManagerSecretRotationList <a name="DataGoogleSecretManagerSecretRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretRotationOutputReference <a name="DataGoogleSecretManagerSecretRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation">DataGoogleSecretManagerSecretRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation">DataGoogleSecretManagerSecretRotation</a>

---


### DataGoogleSecretManagerSecretTopicsList <a name="DataGoogleSecretManagerSecretTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get"></a>

```typescript
public get(index: number): DataGoogleSecretManagerSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleSecretManagerSecretTopicsOutputReference <a name="DataGoogleSecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecret } from '@cdktf/provider-google'

new dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics">DataGoogleSecretManagerSecretTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleSecretManagerSecretTopics;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics">DataGoogleSecretManagerSecretTopics</a>

---




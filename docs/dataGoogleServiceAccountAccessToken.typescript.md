# `dataGoogleServiceAccountAccessToken` Submodule <a name="`dataGoogleServiceAccountAccessToken` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountAccessToken <a name="DataGoogleServiceAccountAccessToken" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token google_service_account_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer"></a>

```typescript
import { dataGoogleServiceAccountAccessToken } from '@cdktf/provider-google'

new dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken(scope: Construct, id: string, config: DataGoogleServiceAccountAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig">DataGoogleServiceAccountAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig">DataGoogleServiceAccountAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetDelegates"></a>

```typescript
public resetDelegates(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.resetLifetime"></a>

```typescript
public resetLifetime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleServiceAccountAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct"></a>

```typescript
import { dataGoogleServiceAccountAccessToken } from '@cdktf/provider-google'

dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement"></a>

```typescript
import { dataGoogleServiceAccountAccessToken } from '@cdktf/provider-google'

dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource"></a>

```typescript
import { dataGoogleServiceAccountAccessToken } from '@cdktf/provider-google'

dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport"></a>

```typescript
import { dataGoogleServiceAccountAccessToken } from '@cdktf/provider-google'

dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleServiceAccountAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleServiceAccountAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleServiceAccountAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegatesInput">delegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegates">delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegatesInput"></a>

```typescript
public readonly delegatesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccountInput"></a>

```typescript
public readonly targetServiceAccountInput: string;
```

- *Type:* string

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountAccessTokenConfig <a name="DataGoogleServiceAccountAccessTokenConfig" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.Initializer"></a>

```typescript
import { dataGoogleServiceAccountAccessToken } from '@cdktf/provider-google'

const dataGoogleServiceAccountAccessTokenConfig: dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#scopes DataGoogleServiceAccountAccessToken#scopes}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#target_service_account DataGoogleServiceAccountAccessToken#target_service_account}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.delegates">delegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#delegates DataGoogleServiceAccountAccessToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#id DataGoogleServiceAccountAccessToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifetime">lifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#lifetime DataGoogleServiceAccountAccessToken#lifetime}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#scopes DataGoogleServiceAccountAccessToken#scopes}.

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#target_service_account DataGoogleServiceAccountAccessToken#target_service_account}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#delegates DataGoogleServiceAccountAccessToken#delegates}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#id DataGoogleServiceAccountAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-google.dataGoogleServiceAccountAccessToken.DataGoogleServiceAccountAccessTokenConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/service_account_access_token#lifetime DataGoogleServiceAccountAccessToken#lifetime}.

---




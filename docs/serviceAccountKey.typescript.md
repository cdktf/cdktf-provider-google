# `serviceAccountKey` Submodule <a name="`serviceAccountKey` Submodule" id="@cdktf/provider-google.serviceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccountKey <a name="ServiceAccountKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer"></a>

```typescript
import { serviceAccountKey } from '@cdktf/provider-google'

new serviceAccountKey.ServiceAccountKey(scope: Construct, id: string, config: ServiceAccountKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig">ServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig">ServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers">resetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType">resetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData">resetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType">resetPublicKeyType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeepers` <a name="resetKeepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers"></a>

```typescript
public resetKeepers(): void
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetPrivateKeyType` <a name="resetPrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType"></a>

```typescript
public resetPrivateKeyType(): void
```

##### `resetPublicKeyData` <a name="resetPublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData"></a>

```typescript
public resetPublicKeyData(): void
```

##### `resetPublicKeyType` <a name="resetPublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType"></a>

```typescript
public resetPublicKeyType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceAccountKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct"></a>

```typescript
import { serviceAccountKey } from '@cdktf/provider-google'

serviceAccountKey.ServiceAccountKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement"></a>

```typescript
import { serviceAccountKey } from '@cdktf/provider-google'

serviceAccountKey.ServiceAccountKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource"></a>

```typescript
import { serviceAccountKey } from '@cdktf/provider-google'

serviceAccountKey.ServiceAccountKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport"></a>

```typescript
import { serviceAccountKey } from '@cdktf/provider-google'

serviceAccountKey.ServiceAccountKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceAccountKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceAccountKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter">validAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore">validBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput">keepersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput">privateKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput">publicKeyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput">publicKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData">publicKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType">publicKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `validAfter`<sup>Required</sup> <a name="validAfter" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter"></a>

```typescript
public readonly validAfter: string;
```

- *Type:* string

---

##### `validBefore`<sup>Required</sup> <a name="validBefore" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore"></a>

```typescript
public readonly validBefore: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput"></a>

```typescript
public readonly keepersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `privateKeyTypeInput`<sup>Optional</sup> <a name="privateKeyTypeInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput"></a>

```typescript
public readonly privateKeyTypeInput: string;
```

- *Type:* string

---

##### `publicKeyDataInput`<sup>Optional</sup> <a name="publicKeyDataInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput"></a>

```typescript
public readonly publicKeyDataInput: string;
```

- *Type:* string

---

##### `publicKeyTypeInput`<sup>Optional</sup> <a name="publicKeyTypeInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput"></a>

```typescript
public readonly publicKeyTypeInput: string;
```

- *Type:* string

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

---

##### `publicKeyData`<sup>Required</sup> <a name="publicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData"></a>

```typescript
public readonly publicKeyData: string;
```

- *Type:* string

---

##### `publicKeyType`<sup>Required</sup> <a name="publicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType"></a>

```typescript
public readonly publicKeyType: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountKeyConfig <a name="ServiceAccountKeyConfig" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.Initializer"></a>

```typescript
import { serviceAccountKey } from '@cdktf/provider-google'

const serviceAccountKeyConfig: serviceAccountKey.ServiceAccountKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#id ServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers">keepers</a></code> | <code>{[ key: string ]: string}</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData">publicKeyData</a></code> | <code>string</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType">publicKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#service_account_id ServiceAccountKey#service_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#id ServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers"></a>

```typescript
public readonly keepers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#keepers ServiceAccountKey#keepers}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#key_algorithm ServiceAccountKey#key_algorithm}

---

##### `privateKeyType`<sup>Optional</sup> <a name="privateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}.

---

##### `publicKeyData`<sup>Optional</sup> <a name="publicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData"></a>

```typescript
public readonly publicKeyData: string;
```

- *Type:* string

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#public_key_data ServiceAccountKey#public_key_data}

---

##### `publicKeyType`<sup>Optional</sup> <a name="publicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType"></a>

```typescript
public readonly publicKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}.

---




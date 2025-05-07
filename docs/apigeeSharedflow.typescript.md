# `apigeeSharedflow` Submodule <a name="`apigeeSharedflow` Submodule" id="@cdktf/provider-google.apigeeSharedflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSharedflow <a name="ApigeeSharedflow" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow google_apigee_sharedflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

new apigeeSharedflow.ApigeeSharedflow(scope: Construct, id: string, config: ApigeeSharedflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig">ApigeeSharedflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig">ApigeeSharedflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetDetectMd5Hash">resetDetectMd5Hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeSharedflowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

---

##### `resetDetectMd5Hash` <a name="resetDetectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetDetectMd5Hash"></a>

```typescript
public resetDetectMd5Hash(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSharedflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isConstruct"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

apigeeSharedflow.ApigeeSharedflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformElement"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

apigeeSharedflow.ApigeeSharedflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformResource"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

apigeeSharedflow.ApigeeSharedflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

apigeeSharedflow.ApigeeSharedflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeSharedflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeSharedflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeSharedflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSharedflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.latestRevisionId">latestRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.md5Hash">md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.metaData">metaData</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList">ApigeeSharedflowMetaDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.revision">revision</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference">ApigeeSharedflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundleInput">configBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5HashInput">detectMd5HashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundle">configBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5Hash">detectMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `latestRevisionId`<sup>Required</sup> <a name="latestRevisionId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.latestRevisionId"></a>

```typescript
public readonly latestRevisionId: string;
```

- *Type:* string

---

##### `md5Hash`<sup>Required</sup> <a name="md5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.md5Hash"></a>

```typescript
public readonly md5Hash: string;
```

- *Type:* string

---

##### `metaData`<sup>Required</sup> <a name="metaData" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.metaData"></a>

```typescript
public readonly metaData: ApigeeSharedflowMetaDataList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList">ApigeeSharedflowMetaDataList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.revision"></a>

```typescript
public readonly revision: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeSharedflowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference">ApigeeSharedflowTimeoutsOutputReference</a>

---

##### `configBundleInput`<sup>Optional</sup> <a name="configBundleInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundleInput"></a>

```typescript
public readonly configBundleInput: string;
```

- *Type:* string

---

##### `detectMd5HashInput`<sup>Optional</sup> <a name="detectMd5HashInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5HashInput"></a>

```typescript
public readonly detectMd5HashInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeSharedflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

---

##### `configBundle`<sup>Required</sup> <a name="configBundle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.configBundle"></a>

```typescript
public readonly configBundle: string;
```

- *Type:* string

---

##### `detectMd5Hash`<sup>Required</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.detectMd5Hash"></a>

```typescript
public readonly detectMd5Hash: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSharedflowConfig <a name="ApigeeSharedflowConfig" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

const apigeeSharedflowConfig: apigeeSharedflow.ApigeeSharedflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.configBundle">configBundle</a></code> | <code>string</code> | Path to the config zip bundle. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.name">name</a></code> | <code>string</code> | The ID of the shared flow. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization name associated with the Apigee instance. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.detectMd5Hash">detectMd5Hash</a></code> | <code>string</code> | A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#id ApigeeSharedflow#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configBundle`<sup>Required</sup> <a name="configBundle" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.configBundle"></a>

```typescript
public readonly configBundle: string;
```

- *Type:* string

Path to the config zip bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#config_bundle ApigeeSharedflow#config_bundle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the shared flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#name ApigeeSharedflow#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization name associated with the Apigee instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#org_id ApigeeSharedflow#org_id}

---

##### `detectMd5Hash`<sup>Optional</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.detectMd5Hash"></a>

```typescript
public readonly detectMd5Hash: string;
```

- *Type:* string

A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice.

A change in hash will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#detect_md5hash ApigeeSharedflow#detect_md5hash}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#id ApigeeSharedflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeSharedflowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#timeouts ApigeeSharedflow#timeouts}

---

### ApigeeSharedflowMetaData <a name="ApigeeSharedflowMetaData" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

const apigeeSharedflowMetaData: apigeeSharedflow.ApigeeSharedflowMetaData = { ... }
```


### ApigeeSharedflowTimeouts <a name="ApigeeSharedflowTimeouts" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

const apigeeSharedflowTimeouts: apigeeSharedflow.ApigeeSharedflowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#create ApigeeSharedflow#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#delete ApigeeSharedflow#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#update ApigeeSharedflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#create ApigeeSharedflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#delete ApigeeSharedflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/apigee_sharedflow#update ApigeeSharedflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSharedflowMetaDataList <a name="ApigeeSharedflowMetaDataList" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

new apigeeSharedflow.ApigeeSharedflowMetaDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.get"></a>

```typescript
public get(index: number): ApigeeSharedflowMetaDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApigeeSharedflowMetaDataOutputReference <a name="ApigeeSharedflowMetaDataOutputReference" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

new apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.subType">subType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData">ApigeeSharedflowMetaData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `subType`<sup>Required</sup> <a name="subType" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.subType"></a>

```typescript
public readonly subType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeSharedflowMetaData;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowMetaData">ApigeeSharedflowMetaData</a>

---


### ApigeeSharedflowTimeoutsOutputReference <a name="ApigeeSharedflowTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeSharedflow } from '@cdktf/provider-google'

new apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSharedflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeSharedflow.ApigeeSharedflowTimeouts">ApigeeSharedflowTimeouts</a>

---




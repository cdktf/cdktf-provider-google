# `accessContextManagerGcpUserAccessBinding` Submodule <a name="`accessContextManagerGcpUserAccessBinding` Submodule" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerGcpUserAccessBinding <a name="AccessContextManagerGcpUserAccessBinding" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

new accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding(scope: Construct, id: string, config: AccessContextManagerGcpUserAccessBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig">AccessContextManagerGcpUserAccessBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig">AccessContextManagerGcpUserAccessBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: AccessContextManagerGcpUserAccessBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerGcpUserAccessBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerGcpUserAccessBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerGcpUserAccessBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput">accessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput">groupKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels">accessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey">groupKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput"></a>

```typescript
public readonly accessLevelsInput: string[];
```

- *Type:* string[]

---

##### `groupKeyInput`<sup>Optional</sup> <a name="groupKeyInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput"></a>

```typescript
public readonly groupKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccessContextManagerGcpUserAccessBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels"></a>

```typescript
public readonly accessLevels: string[];
```

- *Type:* string[]

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey"></a>

```typescript
public readonly groupKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerGcpUserAccessBindingConfig <a name="AccessContextManagerGcpUserAccessBindingConfig" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.Initializer"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

const accessContextManagerGcpUserAccessBindingConfig: accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels">accessLevels</a></code> | <code>string[]</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey">groupKey</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels"></a>

```typescript
public readonly accessLevels: string[];
```

- *Type:* string[]

Required.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey"></a>

```typescript
public readonly groupKey: string;
```

- *Type:* string

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#group_key AccessContextManagerGcpUserAccessBinding#group_key}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccessContextManagerGcpUserAccessBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}

---

### AccessContextManagerGcpUserAccessBindingTimeouts <a name="AccessContextManagerGcpUserAccessBindingTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.Initializer"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

const accessContextManagerGcpUserAccessBindingTimeouts: accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference <a name="AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { accessContextManagerGcpUserAccessBinding } from '@cdktf/provider-google'

new accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessContextManagerGcpUserAccessBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---




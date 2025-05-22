# `endpointsServiceConsumersIamBinding` Submodule <a name="`endpointsServiceConsumersIamBinding` Submodule" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointsServiceConsumersIamBinding <a name="EndpointsServiceConsumersIamBinding" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding google_endpoints_service_consumers_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

new endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding(scope: Construct, id: string, config: EndpointsServiceConsumersIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig">EndpointsServiceConsumersIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig">EndpointsServiceConsumersIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition"></a>

```typescript
public putCondition(value: EndpointsServiceConsumersIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EndpointsServiceConsumersIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EndpointsServiceConsumersIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EndpointsServiceConsumersIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EndpointsServiceConsumersIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EndpointsServiceConsumersIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference">EndpointsServiceConsumersIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProjectInput">consumerProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProject">consumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.condition"></a>

```typescript
public readonly condition: EndpointsServiceConsumersIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference">EndpointsServiceConsumersIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: EndpointsServiceConsumersIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---

##### `consumerProjectInput`<sup>Optional</sup> <a name="consumerProjectInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProjectInput"></a>

```typescript
public readonly consumerProjectInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointsServiceConsumersIamBindingCondition <a name="EndpointsServiceConsumersIamBindingCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

const endpointsServiceConsumersIamBindingCondition: endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#expression EndpointsServiceConsumersIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#title EndpointsServiceConsumersIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#description EndpointsServiceConsumersIamBinding#description}.

---

### EndpointsServiceConsumersIamBindingConfig <a name="EndpointsServiceConsumersIamBindingConfig" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

const endpointsServiceConsumersIamBindingConfig: endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.consumerProject">consumerProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#consumer_project EndpointsServiceConsumersIamBinding#consumer_project}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#members EndpointsServiceConsumersIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#role EndpointsServiceConsumersIamBinding#role}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#service_name EndpointsServiceConsumersIamBinding#service_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: EndpointsServiceConsumersIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#condition EndpointsServiceConsumersIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/endpoints_service_consumers_iam_binding#id EndpointsServiceConsumersIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointsServiceConsumersIamBindingConditionOutputReference <a name="EndpointsServiceConsumersIamBindingConditionOutputReference" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamBinding } from '@cdktf/provider-google'

new endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EndpointsServiceConsumersIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamBinding.EndpointsServiceConsumersIamBindingCondition">EndpointsServiceConsumersIamBindingCondition</a>

---




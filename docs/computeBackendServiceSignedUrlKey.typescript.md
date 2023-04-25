# `google_compute_backend_service_signed_url_key`

Refer to the Terraform Registory for docs: [`google_compute_backend_service_signed_url_key`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key).

# `computeBackendServiceSignedUrlKey` Submodule <a name="`computeBackendServiceSignedUrlKey` Submodule" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendServiceSignedUrlKey <a name="ComputeBackendServiceSignedUrlKey" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key google_compute_backend_service_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

new computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey(scope: Construct, id: string, config: ComputeBackendServiceSignedUrlKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig">ComputeBackendServiceSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig">ComputeBackendServiceSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeBackendServiceSignedUrlKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendServiceInput">backendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValueInput">keyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendService">backendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValue">keyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendServiceInput"></a>

```typescript
public readonly backendServiceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyValueInput`<sup>Optional</sup> <a name="keyValueInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValueInput"></a>

```typescript
public readonly keyValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComputeBackendServiceSignedUrlKeyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a> | cdktf.IResolvable

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendServiceSignedUrlKeyConfig <a name="ComputeBackendServiceSignedUrlKeyConfig" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.Initializer"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

const computeBackendServiceSignedUrlKeyConfig: computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.backendService">backendService</a></code> | <code>string</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.keyValue">keyValue</a></code> | <code>string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.name">name</a></code> | <code>string</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.backendService"></a>

```typescript
public readonly backendService: string;
```

- *Type:* string

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#backend_service ComputeBackendServiceSignedUrlKey#backend_service}

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#key_value ComputeBackendServiceSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#name ComputeBackendServiceSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendServiceSignedUrlKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#timeouts ComputeBackendServiceSignedUrlKey#timeouts}

---

### ComputeBackendServiceSignedUrlKeyTimeouts <a name="ComputeBackendServiceSignedUrlKeyTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.Initializer"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

const computeBackendServiceSignedUrlKeyTimeouts: computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeBackendServiceSignedUrlKey } from '@cdktf/provider-google'

new computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeBackendServiceSignedUrlKeyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a> | cdktf.IResolvable

---




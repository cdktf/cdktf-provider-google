# `google_compute_public_advertised_prefix`

Refer to the Terraform Registory for docs: [`google_compute_public_advertised_prefix`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix).

# `computePublicAdvertisedPrefix` Submodule <a name="`computePublicAdvertisedPrefix` Submodule" id="@cdktf/provider-google.computePublicAdvertisedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicAdvertisedPrefix <a name="ComputePublicAdvertisedPrefix" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix google_compute_public_advertised_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

new computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix(scope: Construct, id: string, config: ComputePublicAdvertisedPrefixConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig">ComputePublicAdvertisedPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig">ComputePublicAdvertisedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputePublicAdvertisedPrefixTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput">dnsVerificationIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp">dnsVerificationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts"></a>

```typescript
public readonly timeouts: ComputePublicAdvertisedPrefixTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnsVerificationIpInput`<sup>Optional</sup> <a name="dnsVerificationIpInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput"></a>

```typescript
public readonly dnsVerificationIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputePublicAdvertisedPrefixTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp"></a>

```typescript
public readonly dnsVerificationIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicAdvertisedPrefixConfig <a name="ComputePublicAdvertisedPrefixConfig" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.Initializer"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

const computePublicAdvertisedPrefixConfig: computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp">dnsVerificationIp</a></code> | <code>string</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsVerificationIp`<sup>Required</sup> <a name="dnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp"></a>

```typescript
public readonly dnsVerificationIp: string;
```

- *Type:* string

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#dns_verification_ip ComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#ip_cidr_range ComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#name ComputePublicAdvertisedPrefix#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#description ComputePublicAdvertisedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputePublicAdvertisedPrefixTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#timeouts ComputePublicAdvertisedPrefix#timeouts}

---

### ComputePublicAdvertisedPrefixTimeouts <a name="ComputePublicAdvertisedPrefixTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.Initializer"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

const computePublicAdvertisedPrefixTimeouts: computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicAdvertisedPrefixTimeoutsOutputReference <a name="ComputePublicAdvertisedPrefixTimeoutsOutputReference" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer"></a>

```typescript
import { computePublicAdvertisedPrefix } from '@cdktf/provider-google'

new computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePublicAdvertisedPrefixTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---



